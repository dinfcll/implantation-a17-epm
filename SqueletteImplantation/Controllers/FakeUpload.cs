using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace SqueletteImplantation.Controllers
{
    public class FakeUpload : UploadService
    {
        public bool upload(IFormFile formFile, string chemin)
        {
            return true;
        }
    }
}
