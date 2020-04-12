using Refit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestCloud.Models
{
    public interface IInstagramService
    {
        [Get("/oembed")]
        Task<IgResponse> GetPost([AliasAs("url")] string postUrl);
    }
}
