using Microsoft.AspNetCore.Http;
using System.IO;

namespace SqueletteImplantation.Controllers
{
    public class RealUpload : UploadService
    {
        public static string Chemin = "/media/EPM/Traces/";

        public bool upload(IFormFile formFile, string chemin)
        {
            try
            {
                using (FileStream upload = new FileStream(chemin, FileMode.CreateNew))
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
