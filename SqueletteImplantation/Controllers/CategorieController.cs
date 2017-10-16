using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class CategorieController: Controller
    {
        private readonly BD_EPM _maBd;

        public CategorieController(BD_EPM maBd)
        {
            _maBd = maBd;
        }

        //obtenir la liste de toutes les catégories
        [HttpGet]
        [Route("api/Categorie")]
        public IEnumerable ListeCategorie()
        {
            return _maBd.Categorie.ToList();
        }



        //obtenir une catégorie selon son id

        [HttpGet]
        [Route("api/Categorie/{id}")]
        public IActionResult GetCategorie(int id)
        {
            var categorie = _maBd.Categorie.FirstOrDefault(ca => ca.CatId== id);

            if (categorie == null)
            {
                return NotFound();
            }

            return new OkObjectResult(categorie);
        }

        //obtenir une catégorie selon l'id de son domaine
        [HttpGet]
        [Route("api/CategorieDomaine/{DomId}")]
        public IEnumerable GetCategorieDomaine(int domId)
        {
            return _maBd.Categorie.Where(ca => ca.DomId == domId).ToList();
        }


      


        //supprimer une catégorie
        [HttpDelete]
        [Route("api/delcat/{id}")]
        public IActionResult DeleteCategorie(int id)
        {
            var categorie = _maBd.Categorie.FirstOrDefault(ca => ca.CatId== id);

            if (categorie == null)
            {
                return NotFound();
            }

            _maBd.Remove(categorie);
            _maBd.SaveChanges();

            return new OkResult();
        }


        //ajouter une catégorie

        [HttpPost]
        [Route("api/ajoutcat")]
        public IActionResult AddCategorie(CategorieDTO catdto)
        {

            var cate = catdto.CreateCategorie();
            _maBd.Categorie.Add(cate);
            _maBd.SaveChanges();

            return new OkObjectResult(cate);
        }



    }
}
