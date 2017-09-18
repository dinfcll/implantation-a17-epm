using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace SqueletteImplantation.Controllers
{
    public class RealUpload : UploadService
    {
        public bool upload(IFormFile formFile, string chemin)
        {
            try
            {
                using (FileStream upload = new FileStream(chemin + formFile.FileName, FileMode.CreateNew))
                {
                    formFile.CopyTo(upload);
                }
                return true;
            }
            catch (IOException ex)
            {
                return false;
            }
        }
    }
}
