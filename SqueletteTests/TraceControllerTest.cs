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

    public class TraceControllerTest
    {
        private readonly TraceController _traceController;
        private static IFormFile fichierbidon = null;
        private const string NomFich = "Test";
        private TraceDTO nouvTrac = new TraceDTO { fich=fichierbidon, id=new int[] { 1,2,3,4} , nomfich= NomFich };

        public TraceControllerTest()
        {
            var options = new DbContextOptionsBuilder<BD_EPM>()
                .UseInMemoryDatabase("DatabaseTrace-" + $"{Guid.NewGuid()}")
                .Options;

            var bdEnMemoire = new BD_EPM(options);

            _traceController = new TraceController(bdEnMemoire, new FakeUpload());
        }

        [Fact]
        public void TraceAjoute()
        {
            var created = _traceController.AjoutTrace(nouvTrac);
            Assert.Equal(200, (created as OkObjectResult).StatusCode);
        }


        [Fact]
        public void TraceDelete()
        {
            var created = _traceController.AjoutTrace(nouvTrac);
            var resultat = _traceController.DeleteTrace(((created as OkObjectResult).Value as Trace).TracId);
            Assert.Equal(200, (resultat as OkResult).StatusCode);
        }

 

        [Fact]
        public void TestInMemoryAddRetrieveTrace()
        {
            var created = _traceController.AjoutTrace(nouvTrac);
            var resultat = _traceController.GetTrace(((created as OkObjectResult).Value as Trace).TracId);
            Assert.Equal(NomFich, ((resultat as OkObjectResult).Value as Trace).TraceNom);

        }

        [Fact]
        public void AddDelGetNotFound()
        {
            var created = _traceController.AjoutTrace(nouvTrac);
            _traceController.DeleteTrace(((created as OkObjectResult).Value as Trace).TracId);
            var result = _traceController.GetTrace(((created as OkObjectResult).Value as Trace).TracId);
            Assert.Equal(404, ((NotFoundResult)result).StatusCode);
        }
    }


}
