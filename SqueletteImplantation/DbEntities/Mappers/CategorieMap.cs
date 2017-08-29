using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities.Mappers
{
    public class CategorieMap
    {
        public CategorieMap(EntityTypeBuilder<Categorie> entityBuilder)
        {
            entityBuilder.HasKey(m => m.CatId);
            entityBuilder.Property(m => m.CatNom).IsRequired();
            //entityBuilder.HasAlternateKey(m => m.DomId)();
        }
    }
}
