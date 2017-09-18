using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using SqueletteImplantation.DbEntities.Models;
using System.IO;

namespace SqueletteImplantation.DbEntities.DTOs
{
    public class TraceDTO
    {
        public IFormFile fich { get; set; }
        public int[] id { get; set; }
        public string nomfich { get; set; }

        public static string Chemin = "/opt/EPM/Traces/";

        public Trace CreateTrace()
        {
            return new Trace { TraceNom = nomfich, TracLogi = IdentificationLogiciel(), TracUrl = TraceDTO.Chemin + fich.FileName};
        }

        private string IdentificationLogiciel()
        {
            string extension = Path.GetExtension(fich.FileName);

            switch(extension)
            {
                case ".pdf":
                    return "Adobe Reader";
                default:
                    return "Autre logiciel";
            }
                
        }
    }
}
