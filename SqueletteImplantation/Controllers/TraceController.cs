using System;
using System.Collections;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.Models;
using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.DbEntities.DTOs;

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
        public IActionResult CetTrace(int id)
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
        [Route("api/ajouttrace")]
        public IActionResult AjoutTrace(TraceDTO nouvtrace)
        {
            if(nouvtrace.id.Length > 0 && (nouvtrace.nomfich != "" || nouvtrace.nomfich != null))
            {
                Trace trace;

                if(_uploadService.upload(nouvtrace.fich, TraceDTO.Chemin +  nouvtrace.fich.FileName))
                {
                    trace = nouvtrace.CreateTrace();
                    _maBd.Add(trace);
                    _maBd.SaveChanges();

                    RelTracCrit relation;
                    for (int i = 0; i < nouvtrace.id.Length; i++)
                    {
                        relation = new RelTracCrit { CritId = nouvtrace.id[i], TracId = trace.TracId };
                        _maBd.Add(relation);
                    }
                    _maBd.SaveChanges();
                    return new OkResult();
                }
            }
            return new NoContentResult();
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
