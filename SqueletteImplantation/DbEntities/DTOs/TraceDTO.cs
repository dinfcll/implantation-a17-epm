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

        public static string Chemin = "/media/EPM/Traces/";

        public Trace CreateTrace()
        {
            string NomFich = "Bidon.txt";
            if(fich != null)
            {
                NomFich = fich.FileName;
            }
            return new Trace { TraceNom = nomfich, TracLogi = IdentificationLogiciel(), TracUrl = TraceDTO.Chemin + NomFich};
        }

        private string IdentificationLogiciel()
        {
            string extension;

            if (fich == null || fich.FileName == "")
            {
                return "Aucun fichier";
            }
            extension = Path.GetExtension(fich.FileName);
            switch (extension)
            {
                case ".pdf":
                    return "Adobe Reader";
                default:
                    return "Autre logiciel";
            }  
        }
    }
}
