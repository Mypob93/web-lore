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
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult PageNotFound()
        {
            return Json("Ok");
        }
    }
}