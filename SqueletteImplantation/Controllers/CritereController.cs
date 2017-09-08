using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class CritereController: Controller
    {
        private readonly BD_EPM _maBd;

        public CritereController(BD_EPM maBd)
        {
            _maBd = maBd;
        }

        //obtenir la liste de toutes les critères
        [HttpGet]
        [Route("api/Critere")]
        public IEnumerable Critere()
        {
            return _maBd.Critere.ToList();
        }


        //obtenir une critère selon son id

        [HttpGet]
        [Route("api/Categorie/{id}")]
        public IActionResult GetCritere(int id)
        {
            var critere = _maBd.Critere.FirstOrDefault(c => c.CritId == id);

            if (critere == null)
            {
                return NotFound();
            }

            return new OkObjectResult(critere);
        }



        //modifier uen critère selon son id

        [HttpPut]
        [Route("api/Critere/{id}")]
        public IActionResult ModifyCritere(Critere updatedCritere)
        {
            var critere = _maBd.Critere.FirstOrDefault(c => c.CritId == updatedCritere.CritId);

            if (critere == null)
            {
                return NotFound();
            }

            _maBd.Entry(critere).CurrentValues.SetValues(updatedCritere);

            return new OkResult();
        }

        /*[HttpPost]
        [Route("api/Critere")]
        public IActionResult CreateCritere(Critere crit)
        {
            var critere =Critere.
            
        }*/

        //supprimer une critère selon son id

        [HttpDelete]
        [Route("api/Critere/{id}")]
        public IActionResult DeleteCritere(int id)
        {
            var critere = _maBd.Critere.FirstOrDefault(c => c.CritId== id);

            if (critere == null)
            {
                return NotFound();
            }

            _maBd.Remove(critere);
            _maBd.SaveChanges();

            return new OkResult();
        }

    }
}
