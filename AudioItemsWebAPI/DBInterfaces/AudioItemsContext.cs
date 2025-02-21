using AudioItemsWebAPI.Models;
using Microsoft.EntityFrameworkCore;


namespace AudioItemsWebAPI.DBInterfaces
{
    public class AudioItemsContext(DbContextOptions<AudioItemsContext> dbContextOptions) : DbContext(dbContextOptions)
    {

        public DbSet<AudioItem> AudioItems { get; set; }

        
    }
}
