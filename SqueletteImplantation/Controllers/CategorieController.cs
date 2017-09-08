﻿using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
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
        public IEnumerable Categorie()
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



        //modifier une catégorie

        [HttpPut]
        [Route("api/Categorie/{id}")]
        public IActionResult ModifyCategorie(Categorie updatedCategorie)
        {
            var categorie = _maBd.Categorie.FirstOrDefault(ca => ca.CatId == updatedCategorie.CatId);

            if (categorie == null)
            {
                return NotFound();
            }

            _maBd.Entry(categorie).CurrentValues.SetValues(updatedCategorie);

            return new OkResult();
        }


        //supprimer une catégorie

        [HttpDelete]
        [Route("api/Categorie/{id}")]
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


    }
}
