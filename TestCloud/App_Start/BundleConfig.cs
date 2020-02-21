using System.Configuration;
using System.Web;
using System.Web.Optimization;

namespace TestCloud
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            var environment = ConfigurationManager.AppSettings["environment"];

            if (environment == "debug")
            {
                bundles.Add(new ScriptBundle("~/bundles/core").Include(
                        "~/Scripts/AngularJs/myApp.js",
                        "~/Scripts/AngularJs/portfolioController.js",
                        "~/Scripts/AngularJs/portfolioCardsController.js",
                        "~/Scripts/AngularJs/contactController.js",
                        "~/Scripts/general.js",
                        "~/Scripts/index.js",
                        "~/Scripts/cookieHandler.js",
                        "~/Scripts/portfolio.js"));
            }
            else
            {
                // TODO: para produccion, minificar los controllers y hacer un bundle del resto
                bundles.Add(new ScriptBundle("~/bundles/core").Include(
                        "~/Scripts/AngularJs/myApp.js",
                        "~/Scripts/AngularJs/portfolioController.js",
                        "~/Scripts/AngularJs/portfolioCardsController.js",
                        "~/Scripts/AngularJs/contactController.js",
                        "~/Scripts/general.js",
                        "~/Scripts/index.js",
                        "~/Scripts/cookieHandler.js",
                        "~/Scripts/portfolio.js"));
            }                    
        }
    }
}
