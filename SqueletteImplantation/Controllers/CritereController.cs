using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
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

        //obtenir la liste des critères selon la catégorie
        [HttpGet]
        [Route("api/CritereCat/{CatId}")]
        public IEnumerable Critere(int catId)
        {
            return _maBd.Critere.Where(cr => cr.CatId == catId).ToList();
        }


        //obtenir une critère selon son id

        [HttpGet]
        [Route("api/Critere/{id}")]
        public IActionResult GetCritere(int id)
        {
            var critere = _maBd.Critere.FirstOrDefault(c => c.CritId == id);

            if (critere == null)
            {
                return NotFound();
            }

            return new OkObjectResult(critere);
        }


        //supprimer une critère selon son id

        [HttpDelete]
        [Route("api/delcrite/{id}")]
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

        
        //ajouter une critère

        [HttpPost]
        [Route("api/ajoutcrite")]
        public IActionResult AddCritere([FromBody]CritereDTO critdto)
        {
            var Crit = critdto.CreateCritere();
            _maBd.Add(Crit);
            _maBd.SaveChanges();

            return new OkObjectResult(Crit);
        }


    }
}
