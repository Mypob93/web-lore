using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace TestCloud.Services
{
    public static class FileReaderHelper
    {
        public static string Read(string path)
        {
            var json = File.ReadAllText(path);
            return json;
        }
    }
}