using System;
using System.Collections;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.Models;
using Microsoft.EntityFrameworkCore;

namespace SqueletteImplantation.Controllers
{
    public class TraceController: Controller
    {
        private readonly BD_EPM _maBd;

        public TraceController(BD_EPM maBd)
        {
            _maBd = maBd;
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

        [HttpGet]
        [Route("api/TraceListe")]
        public IActionResult ListeTrace(int[] id)
        {
            var ListeTrace = RechercheTraceSelonCriteres(id);

            return new OkObjectResult(ListeTrace);
        }

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


        //modifier un trace selon son id

        [HttpPut]
        [Route("api/Trace/{id}")]
        public IActionResult ModifyTrace(Trace updatedTrace)
        {
            var trace = _maBd.Trace.FirstOrDefault(t =>t.TracId  == updatedTrace.TracId);

            if (trace == null)
            {
                return NotFound();
            }

            _maBd.Entry(trace).CurrentValues.SetValues(updatedTrace);

            return new OkResult();
        }


        //supprimer un tracé selon son id

        [HttpDelete]
        [Route("api/Trace/{id}")]
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
