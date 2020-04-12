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
            var portfolioItems = ReadJsonPortfolio();
            return View("Portfolio", portfolioItems);
        }

        private IEnumerable<PortfolioImage> ReadJsonPortfolio()
        {
            var mappedPath = Server.MapPath("~/Content/Images/portfolio");
            var result = new List<PortfolioImage>();

            var photosPath = mappedPath + "/Photos";
            var graphicsPath = mappedPath + "/Graphics";
            var thumbnailsPath = mappedPath + "/Thumbnails";

            try
            {
                result.AddRange(GetImagesModel(PortfolioEnum.Graphics, graphicsPath));
                result.AddRange(GetImagesModel(PortfolioEnum.Photos, photosPath));
                result.AddRange(GetImagesModel(PortfolioEnum.Thumbnails, thumbnailsPath));
            }
            catch (Exception)
            {
            }

            return result;
        }

        private IEnumerable<PortfolioImage> GetImagesModel(PortfolioEnum type, string path)
        {
            var directoryInfo = new DirectoryInfo(path);
            var files = directoryInfo.GetFiles();

            var result = files?
                .Select(x => new PortfolioImage { Src = $"/Content/Images/portfolio/{type.ToString()}/{x.Name}", Section = type.ToString() })
                .ToList();

            return result;
        }
    }
}