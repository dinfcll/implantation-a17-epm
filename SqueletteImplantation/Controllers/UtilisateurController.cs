using System.Collections;
using System.Linq;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.DTOs;
using SqueletteImplantation.DbEntities.Models;
using System;


namespace SqueletteImplantation.Controllers
{
    public class UtilisateurController: Controller
    {
        private readonly BD_EPM _maBd;
        private Courriel courriel = new Courriel();

        public UtilisateurController(BD_EPM maBd)
        {
            _maBd = maBd;
        }

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "qwertyuiopasdfghjklzxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
            return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        
        [HttpPost]
        [Route("api/utilisateur/login")]
        public IActionResult Post([FromBody]Utilisateur util)
        {
            var login = _maBd.Utilisateur.FirstOrDefault(retour => retour.UtilUserName == util.UtilUserName && retour.UtilPWD == Hash.GetHash(util.UtilPWD));

            if (login == null)
            {
                return new OkObjectResult(null);
            }
            return new OkObjectResult(login.UtilType);
        }

        [HttpPost]
        [Route("api/utilisateur/reset/{email}")]
        public IActionResult Post(String email)
        {

            var comptereset = _maBd.Utilisateur.SingleOrDefault(u => u.UtilEmail == email);

            if (comptereset != null)
            {                
                String PWD = RandomString(8);
                comptereset.UtilPWD = Hash.GetHash(PWD);
                courriel.setDestination(email);
                courriel.setSender("electrophysologiemedicale@gmail.com", "Réinitialisation du mot de passe");
                courriel.SetMessage("Bonjour," +
                    "Voici le nouveau mot de passe a utiliser lors de votre prochaine connexion." +
                    PWD
                    + "Nous vous recommandons de la changer a l'aide de la page de modification du profil." +
                    "Bonne journee.");
                courriel.setSubject("Nouveau Mot de passe");
                courriel.sendMessage();

                _maBd.Utilisateur.Attach(comptereset);

                var entry = _maBd.Entry(comptereset);
                entry.Property(e => e.UtilPWD).IsModified = true;
                _maBd.SaveChanges();
            }
            else
            {
                return new ObjectResult(null);
            }
            return new OkObjectResult(true);
        }
    }
}