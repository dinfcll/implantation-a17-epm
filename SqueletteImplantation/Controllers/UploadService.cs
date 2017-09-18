using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.Controllers
{
    public interface UploadService
    {
        bool upload(IFormFile formFile, string chemin);
    }
}
