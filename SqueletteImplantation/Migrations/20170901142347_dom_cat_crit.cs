using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace squeletteimplantation.Migrations
{
    public partial class dom_cat_crit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_crit_cat",
                table: "Criteres");

            migrationBuilder.AlterColumn<int>(
                name: "CritId",
                table: "Criteres",
                nullable: false,
                oldClrType: typeof(int))
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn);

            migrationBuilder.CreateIndex(
                name: "IX_Criteres_CatId",
                table: "Criteres",
                column: "CatId");

            migrationBuilder.AddForeignKey(
                name: "fk_crit_cat",
                table: "Criteres",
                column: "CatId",
                principalTable: "Categorie",
                principalColumn: "CatId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_crit_cat",
                table: "Criteres");

            migrationBuilder.DropIndex(
                name: "IX_Criteres_CatId",
                table: "Criteres");

            migrationBuilder.AlterColumn<int>(
                name: "CritId",
                table: "Criteres",
                nullable: false,
                oldClrType: typeof(int))
                .OldAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn);

            migrationBuilder.AddForeignKey(
                name: "fk_crit_cat",
                table: "Criteres",
                column: "CritId",
                principalTable: "Categorie",
                principalColumn: "CatId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
