using Microsoft.EntityFrameworkCore;
using SqueletteImplantation.DbEntities.Mappers;
using SqueletteImplantation.DbEntities.Models;

namespace SqueletteImplantation.DbEntities
{
    public class BD_EPM : DbContext
    {
        public virtual DbSet<Machin> Machin { get; set; }
        public virtual DbSet<Categorie> Categorie { get; set; }
        public virtual DbSet<Domaine> Domaine { get; set; }
        public virtual DbSet<Critere> Critere { get; set; }
        public virtual DbSet<Trace> Trace { get; set; }
        public virtual DbSet<RelTracCrit> RelTracCrit { get; set; }


        public BD_EPM(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new MachinMap(modelBuilder.Entity<Machin>());

            new DomaineMap(modelBuilder.Entity<Domaine>());

            new CategorieMap(modelBuilder.Entity<Categorie>());

            new CriteresMap(modelBuilder.Entity<Critere>());

            new TraceMap(modelBuilder.Entity<Trace>());

            new RelTracCritMap(modelBuilder.Entity<RelTracCrit>());

            //Auto incréments
            modelBuilder.Entity<Domaine>()
                .Property(d => d.DomId)
                .ValueGeneratedOnAdd();

            modelBuilder.Entity<Categorie>()
                .Property(ca => ca.CatId)
                .ValueGeneratedOnAdd();

            modelBuilder.Entity<Critere>()
                .Property(cr => cr.CritId)
                .ValueGeneratedOnAdd();

            modelBuilder.Entity<Trace>()
                .Property(t => t.TracId)
                .ValueGeneratedOnAdd();
            
            //Foreign key de la table catégorie
            modelBuilder.Entity<Categorie>()
                .HasOne(ca => ca.domaine)
                .WithMany(d => d.categories)
                .HasForeignKey(ca => ca.DomId)
                .HasConstraintName("fk_cat_dom");

            //Foreign key de la table critère
            modelBuilder.Entity<Critere>()
                .HasOne(cr => cr.categorie)
                .WithMany(ca => ca.criteres)
                .HasForeignKey(cr => cr.CatId)
                .HasConstraintName("fk_crit_cat");

            //Clé primaire table de relation RelTracCrit
            modelBuilder.Entity<RelTracCrit>()
                .HasKey(rtc => new { rtc.CritId, rtc.TracId });

            //Foreign keys de la table de relation RelTracCrit
            modelBuilder.Entity<RelTracCrit>()
                .HasOne(rtc => rtc.criteres)
                .WithMany(cr => cr.reltraccrit)
                .HasForeignKey(rtc => rtc.CritId)
                .HasConstraintName("fk_Critere_relTracCrit");

            modelBuilder.Entity<RelTracCrit>()
                .HasOne(rtc => rtc.trace)
                .WithMany(t => t.reltraccrit)
                .HasForeignKey(rtc => rtc.TracId)
                .HasConstraintName("fk_Trace_relTracCrit");
        }
    }
}
