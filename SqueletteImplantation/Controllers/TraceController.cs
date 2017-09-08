using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.Models;


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


        //supprimer un tracé son id

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
