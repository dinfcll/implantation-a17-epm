using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.Controllers;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;
using Xunit;
using Microsoft.AspNetCore.Http;
namespace SqueletteTests
{
    public class CategorieControllerTest
    {
        private const int DomId = 1;
        private const string CatNom = "truc";
       


        private readonly CategorieController _CategorieController;
        public CategorieControllerTest()
        {

            var options = new DbContextOptionsBuilder<BD_EPM>()
                .UseInMemoryDatabase("DatabaseTrace-" + $"{Guid.NewGuid()}")
                .Options;

            var bdEnMemoire = new BD_EPM(options);

            _CategorieController = new CategorieController(bdEnMemoire);
        }

        [Fact]
        public void NoCritNotFound()
        {
            var result = _CategorieController.GetCategorie(100000000);

            Assert.Equal(404, ((NotFoundResult)result).StatusCode);
        }

        [Fact]
        public void AjoutCategorieTest()
        {
            var created =_CategorieController.AddCategorie(new CategorieDTO { NomCat = CatNom, IdDom= DomId });
            var resultat = _CategorieController.GetCategorie(((created as OkObjectResult).Value as Categorie).CatId);
            Assert.Equal(CatNom, ((resultat as OkObjectResult).Value as Categorie).CatNom);
            Assert.Equal(DomId, ((resultat as OkObjectResult).Value as Categorie).DomId);
        }

        [Fact]
        public void TestCreateDelete()
        {
            var created = _CategorieController.AddCategorie(new CategorieDTO { NomCat = CatNom, IdDom = DomId });

            var resultat = _CategorieController.DeleteCategorie(((created as OkObjectResult).Value as Categorie).CatId);

            Assert.Equal(200, (resultat as OkResult).StatusCode);

            var entityNotFound = _CategorieController.GetCategorie(((created as OkObjectResult).Value as Categorie).CatId);

            Assert.Equal(404, ((NotFoundResult)entityNotFound).StatusCode);
        }



    }
}
