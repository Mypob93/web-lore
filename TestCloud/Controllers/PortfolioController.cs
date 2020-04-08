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
    [Route("{controller}/{action}")]
    public class PortfolioController : BaseController
    {
        [Route("")]
        public ActionResult Index()
        {
            SetIdioma();
            return View("Portfolio");
        }
    }
}