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
    public class BaseController : Controller
    {
        protected void SetIdioma()
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