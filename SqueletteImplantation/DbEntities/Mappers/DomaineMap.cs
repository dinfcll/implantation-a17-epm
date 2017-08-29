using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class DomaineMap
    {
        public DomaineMap(EntityTypeBuilder<Domaine> entityBuilder)
        {

            //entityBuilder.Property(m => m.CatNom).IsRequired();

        }
    }
}
