using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.Controllers
{
    public class UtilisateurController: Controller
    {
        private readonly BD_EPM _maBd;

        public UtilisateurController(BD_EPM maBd)
        {
            _maBd = maBd;
        }
        
        [HttpPost]
        [Route("api/utilisateur/login")]
        public IActionResult Post([FromBody]Utilisateur util)
        {
            var login = _maBd.Utilisateur.FirstOrDefault(retour => retour.UtilUserName == util.UtilUserName && retour.UtilPWD == util.UtilPWD);

            if (login == null)
            {
                return new OkObjectResult(null);
            }
            return new OkObjectResult(login.UtilType);
        }

    }
}