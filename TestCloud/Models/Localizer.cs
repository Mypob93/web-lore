using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestCloud.Models
{
    public class Localizer
    {
        public Localizer()
        {
            Translations = new Dictionary<string, string>();
        }

        public IDictionary<string, string> Translations { get; set; }
    }

    public class LanguageKey
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public static class LocalizerHelper
    {
        public static string GetTranslationByKey(this IDictionary<string, string> dictionary, string key)
        {
            if (string.IsNullOrEmpty(key)) return "[]";

            try
            {
                return dictionary[key];
            }
            catch (Exception)
            {
                return $"[{key}]";
            }
        }
    }
}