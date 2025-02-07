using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularCRUDApp.Server.Models
{
    [PrimaryKey("Id")]
    public class AudioItem
    {
        [Key]        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; }

        public ItemTypes ItemType { get; set; }

        public string? Brand { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }

        public int Price { get; set; }

    }
}
