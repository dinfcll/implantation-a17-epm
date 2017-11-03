using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
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
        public static string GetRandomString(int length)
        {
            const string chars = "qwertyupasdfghjkzxcvbnmABCDEFGHJKMNPQRSTUVWXYZ123456789";
            return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        
        [HttpPost]
        [Route("api/utilisateur/login")]
        public IActionResult ConnexionUser([FromBody]Utilisateur util)
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
        public IActionResult ReinitialisatioMDP(String email)
        {

            var comptereset = _maBd.Utilisateur.SingleOrDefault(u => u.UtilEmail == email);

            if (comptereset != null)
            {                
                String PWD = GetRandomString(8);
                comptereset.UtilPWD = Hash.GetHash(PWD);
                courriel.setDestination(email);
                courriel.setSender("electrophysologiemedicale@gmail.com", "noreplyEPM");
                courriel.SetHTMLMessage("<h1>Bonjour " + comptereset.UtilUserName + "</h1><br>Voici le nouveau mot de passe à utiliser lors de votre prochaine connexion : <b>" + 
                    PWD + 
                    "</b><br><p>Nous vous recommandons de le changer à l'aide de la page de modification du profil le plus tôt possible.<p><br><h2>Merci et bonne journée.");
                courriel.setSubject("Réinitialisation du mot de passe.");
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