using AngularCRUDApp.Server.Models;
using Microsoft.EntityFrameworkCore;


namespace AngularCRUDApp.Server.DBInterfaces
{
    public class AudioItemsContext(DbContextOptions<AudioItemsContext> dbContextOptions) : DbContext(dbContextOptions)
    {

        public DbSet<AudioItem> AudioItems { get; set; }

        
    }
}
