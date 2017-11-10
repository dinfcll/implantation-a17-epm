﻿using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SqueletteImplantation.DbEntities;
using SqueletteImplantation.DbEntities.Models;
using SqueletteImplantation.DbEntities.DTOs;
using System.Collections.Generic;


namespace SqueletteImplantation.Controllers
{
    public class HistoriqueController : Controller
    {
        private readonly BD_EPM _maBd;

        public HistoriqueController(BD_EPM maBd)
        {
            _maBd = maBd;

        }

        [HttpGet]
        [Route("api/DerniersTelechargements/{id}")]
        public IEnumerable GetDerniersTelechargementsSelonIdUtil(int id)
        {

            return from Tr in _maBd.Trace
                   join Hist in _maBd.RelTracUsager on Tr.TracId equals Hist.TracId
                   where Hist.UtilId == id
                   orderby Hist.DateTelechargement descending
                   select Tr;

        }


        [HttpPost]
        [Route("api/AjoutRechercheRecente")]
        public IActionResult AddRecherche([FromBody]HistoriqueDTO infostelechargement)
        {
            RelTracUsag EntreeHistorique;

            EntreeHistorique = infostelechargement.CreationElementHistorique();


            if (ValiderSiEntreeExistante(EntreeHistorique))
            {
                _maBd.Add(EntreeHistorique);
                _maBd.SaveChanges();
            }
            else
            {
                _maBd.Update(EntreeHistorique);
            }



            return new OkObjectResult(EntreeHistorique);


        }

        private bool ValiderSiEntreeExistante(RelTracUsag EntreeHistorique)
        {
            return (from hist in _maBd.RelTracUsager
                    where EntreeHistorique.UtilId == hist.UtilId &&
                    EntreeHistorique.TracId == hist.TracId
                    group hist by new { hist.TracId, hist.UtilId }
                    into grp
                    select grp.Count()).Equals(0);
        }

        private void SupprEntreesUserSiPlusDe5(int IdUser)
        {
            var Entrees = from hist in _maBd.RelTracUsager
                              where IdUser == hist.UtilId
                              select hist;

            if(Entrees.Count()>5)
            {
                var ListeTelechargementUser = (from hist in _maBd.RelTracUsager
                                              orderby hist.DateTelechargement
                                              select hist).GetEnumerator();


                for (int i= 0;i<Entrees.Count()-5;i--)
                {
                    _maBd.Remove(ListeTelechargementUser.Current);
                    ListeTelechargementUser.MoveNext();
                }
            }

        }

    }
}
