using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace TestCloud.Services
{
    public static class FileReaderHelper
    {
        static readonly object _fileAccess = new object();

        public static string Read(string path)
        {
            lock (_fileAccess)
            {
                var json = File.ReadAllText(path);
                return json;
            }            
        }
    }
}