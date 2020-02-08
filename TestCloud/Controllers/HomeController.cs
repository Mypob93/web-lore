using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestCloud.EmailSender;
using TestCloud.Models;
using System.IO;
using TestCloud.Services;
using Newtonsoft.Json;

namespace TestCloud.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            SetIdioma();
            return View();
        }

        public ActionResult Portfolio()
        {
            SetIdioma();
            return View("Portfolio");
        }


        [HttpPost]
        public JsonResult ContactMe(ContactMeViewModel viewModel)
        {
            try
            {
                SendMail(viewModel);
                return Json("ok");
            }
            catch (Exception)
            {
                Response.StatusCode = 400;
                return Json("Mal");
            }
        }

        private void SendMail(ContactMeViewModel viewModel)
        {
            var sender = ConfigurationManager.AppSettings["mailconfig.address"];
            var password = ConfigurationManager.AppSettings["mailconfig.password"];

            var receiver = ConfigurationManager.AppSettings["mailconfig.receiver"];

            var emailSender = new EmailManager("smtp-mail.outlook.com");
            var emailConfiguration = new EmailSendConfigure
            {
                ClientCredentialUserName = sender,
                ClientCredentialPassword = password,
                TOs = new string[] { receiver },
                CCs = new string[] { },
                From = sender,
                FromDisplayName = "testingBot",
                Priority = System.Net.Mail.MailPriority.High,
                Subject = "Consulta recibida en web"
            };

            var emailContent = new EmailContent
            {
                IsHtml = false, // TODO
                Content = $"Email enviado por: {viewModel.Name}, email: {viewModel.Email}, asunto: {viewModel.Subject} y mensaje: {viewModel.Message}"
            };

            emailSender.SendMail(emailConfiguration, emailContent);
        }

        private void SetIdioma()
        {
            var cookies = Request.Cookies;
            var defaultLang = "EN";

            if (cookies["lang-web"] != null)
            {
                var value = cookies["lang-web"].Value;
                defaultLang = value;
            }

            ViewBag.Localizer = GetLocalizer(defaultLang).Translations;
        }

        private Localizer GetLocalizer(string lang)
        {
            var result = new Localizer();

            var langFile = string.Empty;

            switch (lang)
            {
                case "ES":
                    langFile = "~/Resources/lang/es.json";
                    break;
                case "EN":
                    langFile = "~/Resources/lang/en.json";
                    break;
            }

            result.Translations = ReadLangFile(langFile);

            return result;
        }

        private IDictionary<string, string> ReadLangFile(string path)
        {
            var mappedPath = Server.MapPath(path);

            var json = FileReaderHelper.Read(mappedPath);

            var values = JsonConvert.DeserializeObject<List<LanguageKey>>(json);

            var dictionary = values
                .ToDictionary(x => x.Key, x => x.Value);

            return dictionary;
        }
    }
}