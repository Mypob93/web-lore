using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestCloud.EmailSender;
using TestCloud.Models;

namespace TestCloud.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
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
    }
}