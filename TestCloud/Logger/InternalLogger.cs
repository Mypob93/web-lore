using Serilog;
using Serilog.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestCloud.InternalLogger
{
    public static class LoggingUtils
    {
        private static Logger _instance;
        public static Logger Instance
        {
            get
            {
                if (_instance == null)
                {
                    var dir = AppDomain.CurrentDomain.BaseDirectory;
                    var combined = dir + "logs/web.txt";

                    _instance = new LoggerConfiguration()
                           .MinimumLevel.Debug()
                           .WriteTo.Console()
                           .WriteTo.File(combined, rollingInterval: RollingInterval.Day)
                           .CreateLogger();

                    _instance.Information("Starting logger...");
                }

                return _instance;
            }
        }
    }
}