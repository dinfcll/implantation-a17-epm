using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.DbEntities.Mappers;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities
{
    public class MaBd : DbContext
    {
        public virtual DbSet<Machin> Machin { get; set; }
        public virtual DbSet<Categorie> Categorie { get; set; }
        public virtual DbSet<Domaine> Domaine { get; set; }
        public virtual DbSet<Criteres> Criteres { get; set; }

        public MaBd(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new MachinMap(modelBuilder.Entity<Machin>());

            new DomaineMap(modelBuilder.Entity<Domaine>());

            new CategorieMap(modelBuilder.Entity<Categorie>());

            new CriteresMap(modelBuilder.Entity<Criteres>());

            modelBuilder.Entity<Categorie>()
                .HasOne(ca => ca.domaine)
                .WithMany(d => d.categories)
                .HasForeignKey(ca => ca.DomId)
                .HasConstraintName("fk_cat_dom");

            modelBuilder.Entity<Criteres>()
                .HasOne(cr => cr.categorie)
                .WithMany(ca => ca.criteres)
                .HasForeignKey(cr => cr.CatId)
                .HasConstraintName("fk_crit_cat");
        }
    }
}
