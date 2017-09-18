using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.Controllers;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;
using Xunit;

namespace SqueletteTests
{

    public class TraceControllerTest
    {
        private readonly TraceController _traceController;
        private TraceDTO nouvTrac = new TraceDTO { fich = null, id = new int[] { 1, 2, 3, 4 }, nomfich = "Test.pdf" };
        

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

            Assert.Equal(new OkResult(), created);
        }
    }
}
