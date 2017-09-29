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
    class CategorieControllerTest
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


    }
}
