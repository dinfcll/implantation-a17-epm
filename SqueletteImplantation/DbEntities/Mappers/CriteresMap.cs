using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class CriteresMap
    {
        public CriteresMap(EntityTypeBuilder<Criteres> entityBuilder)
        {
            
            //entityBuilder.Property(m => m.CatNom).IsRequired();

        }
    }
}
