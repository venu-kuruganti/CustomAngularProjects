using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AudioItemsWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedMigrationWithImageCol : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "AudioItems",
                type: "varbinary(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "AudioItems");
        }
    }
}
