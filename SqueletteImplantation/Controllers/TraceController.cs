using System;
using System.Collections;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.Models;
using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.DbEntities.DTOs;
using Microsoft.AspNetCore.Http;

namespace SqueletteImplantation.Controllers
{
    public class TraceController: Controller
    {
        private readonly BD_EPM _maBd;

        private readonly UploadService _uploadService;

        public TraceController(BD_EPM maBd, UploadService uploadService)
        {
            _maBd = maBd;
            _uploadService = uploadService;
        }

        //obtenir la liste de tous les tracés
        [HttpGet]
        [Route("api/Trace")]
        public IEnumerable Trace()
        {
            return _maBd.Trace.ToList();
        }

        //obtenir tracé selon son id

        [HttpGet]
        [Route("api/Trace/{id}")]
        public IActionResult GetTrace(int id)
        {
            var trace = _maBd.Trace.FirstOrDefault(t => t.TracId == id);

            if (trace == null)
            {
                return NotFound();
            }

            return new OkObjectResult(trace);
        }

        //Obtenir une liste de tracés correspondants selon une liste de critères reçue

        [HttpGet]
        [Route("api/TraceListe")]
        public IActionResult ListeTrace(int[] id)
        {
            var listeTrace = RechercheTraceSelonCriteres(id);

            if (listeTrace == null)
            {
                return NotFound();
            }

            return new OkObjectResult(listeTrace);
        }


        //Méthode qui cherche la liste de tracés selon un tableau d'id de critères
        private IQueryable<object> RechercheTraceSelonCriteres(int[] id)
        {
            return from tr in _maBd.Trace
                join rl in _maBd.RelTracCrit on tr.TracId equals rl.TracId
                join cr in _maBd.Critere on rl.CritId equals cr.CritId
                where id.Contains(cr.CritId)
                group tr by new {tr.TracId, tr.TraceNom, tr.TracUrl,tr.TracLogi}
                into grp
                where grp.Count() == id.Length
                select grp.Key;
        }


        //Ajout de trace
        [HttpPost]
        [Route("api/ajoutfichier")]
        public IActionResult AjoutFichier([FromBody] IFormFile trace)
        {
            string NomTrace;

            if(trace != null)
            {
                NomTrace = trace.FileName;

                if (_uploadService.upload(trace, RealUpload.Chemin + NomTrace))
                {
                    return new OkObjectResult(RealUpload.Chemin + NomTrace);
                }
            }
            return new BadRequestResult();
        }

        [HttpPost]
        [Route("api/ajouttrace")]
        public IActionResult AjoutTrace([FromBody] TraceDTO nouvtrace)
        {
            if(nouvtrace.Id.Length > 0 && (nouvtrace.Nomfich != "" || nouvtrace.Nomfich != null) && (nouvtrace.chemin != null || nouvtrace.chemin != ""))
            {
                Trace trace;

                trace = nouvtrace.CreateTrace();
                _maBd.Add(trace);
                _maBd.SaveChanges();

                RelTracCrit relation;
                for (int i = 0; i < nouvtrace.Id.Length; i++)
                {
                    relation = new RelTracCrit { CritId = nouvtrace.Id[i], TracId = trace.TracId };
                    _maBd.Add(relation);
                }
                _maBd.SaveChanges();
                return new OkObjectResult(trace);
            }
            return new BadRequestResult();
        }


        //supprimer un tracé selon son id
        [HttpDelete]
        [Route("api/TraceListe/{id}")]
        public IActionResult DeleteTrace(int id)
        {
            var trace = _maBd.Trace.FirstOrDefault(t => t.TracId == id);

            if (trace == null)
            {
                return NotFound();
            }

            _maBd.Remove(trace);
            _maBd.SaveChanges();

            return new OkResult();

        }
    }
}
