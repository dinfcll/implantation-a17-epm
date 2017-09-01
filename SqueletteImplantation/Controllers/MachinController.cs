using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class MachinController : Controller
    {
        private readonly MaBd _maBd;

        public MachinController(MaBd maBd)
        {
            _maBd = maBd;
        }

        [HttpGet]
        [Route("api/machins")]
        public IEnumerable Index()
        {
            return _maBd.Machin.ToList();
        }

        [HttpGet]
        [Route("api/Domaine")]
        public IEnumerable Domaine()
        {
            return _maBd.Domaine.ToList();
        }

        [HttpPost]
        [Route("api/machins")]
        public IActionResult CreateMachin(MachinDto machinDto)
        {
            var machin = machinDto.CreateMachin();

            _maBd.Machin.Add(machin);
            _maBd.SaveChanges();

            return new OkObjectResult(machin);
        }

        [HttpGet]
        [Route("api/Domaine/{id}")]
        public IActionResult GetMachin(int id)
        {
            var Domaine = _maBd.Domaine.FirstOrDefault(m => m.DomId == id);

            if (Domaine == null)
            {
                return NotFound();
            }

            return new OkObjectResult(Domaine);
        }

        [HttpPut]
        [Route("api/machins/{id}")]
        public IActionResult ModifyMachin(Machin updatedMachin)
        {
            var machin = _maBd.Machin.FirstOrDefault(m => m.Id == updatedMachin.Id);

            if (machin == null)
            {
                return NotFound();
            }

            _maBd.Entry(machin).CurrentValues.SetValues(updatedMachin);

            return new OkResult();
        }

        [HttpDelete]
        [Route("api/machins/{id}")]
        public IActionResult DeleteMachin(int id)
        {
            var machin = _maBd.Machin.FirstOrDefault(m => m.Id == id);

            if (machin == null)
            {
                return NotFound();
            }

            _maBd.Remove(machin);
            _maBd.SaveChanges();

            return new OkResult();
        }

    }
}