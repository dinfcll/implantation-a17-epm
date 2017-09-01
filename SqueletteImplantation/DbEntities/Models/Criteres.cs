
namespace SqueletteImplantation.DbEntities.Models
{
    public class Criteres
    {

        public int CritId { get; set; }
        public string CritNom { get; set; }
        public int CatId { get; set; }

        public Categorie categorie { get; set; }
    }
}
