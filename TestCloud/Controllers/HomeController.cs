using Newtonsoft.Json;
using Refit;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using TestCloud.EmailSender;
using TestCloud.InternalLogger;
using TestCloud.Models;
using TestCloud.Services;

namespace TestCloud.Controllers
{
    public class HomeController : BaseController
    {
        [Route("")]
        public ActionResult Index()
        {
            LoggingUtils.Instance.Information("Starting index...");
            SetIdioma();
            return View();
        }

        [HttpPost]
        public JsonResult Testing()
        {
            return Json("TESTING");
        }

        [HttpPost]
        [AcceptVerbs(HttpVerbs.Post)]
        [ValidateAntiForgeryToken]
        public JsonResult ContactMe(ContactMeViewModel viewModel)
        {
            try
            {
                LoggingUtils.Instance.Information($"Sending mail: {JsonConvert.SerializeObject(viewModel)}");
                //SendMail(viewModel);
                Sendgrid(viewModel);
                return Json("ok");
            }
            catch (Exception e)
            {
                LoggingUtils.Instance.Information(e, "Error while sending mail");
                //Response.StatusCode = 400;
                return Json(e.Message + " " + e.InnerException);
            }
        }

        public JsonResult Sendgrid(ContactMeViewModel viewModel)
        {
            try
            {
                var receiver = ConfigurationManager.AppSettings["mailconfig.receiver"];
                var url = ConfigurationManager.AppSettings["mailconfig.sender"];
                var apiKey = ConfigurationManager.AppSettings["sendgrid.key"];

                var client = new SendGridClient(apiKey);

                var from = new EmailAddress(url);
                var subject = $"Consulta recibida en web";
                var to = new EmailAddress(receiver);
                var plainTextContent = string.Empty;
                var content = GetHtmlContent(viewModel);

                var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, content);

                var response = client.SendEmailAsync(msg).Result;
                var result = response.Body.ReadAsStringAsync().Result;

                return Json("OK", JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(e.Message + " " + e.InnerException, JsonRequestBehavior.AllowGet);
            }
        }

        private string GetHtmlContent(ContactMeViewModel viewModel)
        {
            var content = "<!DOCTYPE html>" +
               "<html>" +
               "<body>" +
               "<h3> Consulta recibida </h3>" +
                 "Se realizo una consulta vía web" +
                 "<br/>" +
                 "<strong> Asunto</strong>: ##Asunto##" +
               "<br/>" +
               "<strong> Nombre</strong>: ##Nombre##" +
               "<br/>" +
               "<strong> Email</strong>: ##Email##" +
               "<br/>" +
               "<strong> Mensaje</strong>: ##Mensaje##" +
               "<br/>" +
               "Saludos!" +
               "<br/>" +
               "</body>" +
               "</html>";

            content = content
                .Replace("##Asunto##", viewModel.Subject)
                .Replace("##Nombre##", viewModel.Name)
                .Replace("##Email##", viewModel.Email)
                .Replace("##Mensaje##", viewModel.Message);

            return content; // llevar a template externo
        }

        [HttpGet]
        public JsonResult Feed()
        {
            try
            {
                var feed = ReadInstagramFeed();
                return Json(feed, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                Response.StatusCode = 400;
                return Json(e.Message);
            }

        }

        private IEnumerable<IgFeedModel> ReadInstagramFeed()
        {
            var resultado = new List<IgFeedModel>();
            var mappedPath = Server.MapPath("~/Resources/igfeed.json");

            try
            {
                var json = FileReaderHelper.Read(mappedPath);
                var values = JsonConvert.DeserializeObject<IgConfiguration>(json);

                foreach (var value in values.pics)
                {
                    var service = RestService.For<IInstagramService>("https://api.instagram.com");
                    var result = service.GetPost(value);
                    var r = result.Result;
                    resultado.Add(new IgFeedModel { Src = r.thumbnail_url, Url = value });
                }
            }
            catch (Exception e)
            {
            }

            return resultado;
        }
    }
}