
using AudioItemsWebAPI.DBInterfaces.Interfaces;
using AudioItemsWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AudioItemsWebAPI.DBInterfaces.Classes
{
    public class AudioItemsRepository(AudioItemsContext context) : IAudioItemsRepository
    {
        public async Task<bool> AddAudioItem(AudioItem item)
        {
            context.AudioItems.Add(item);

            return await context.SaveChangesAsync() > 0;
        }

        public async Task<bool> DeleteAudioItem(int id)
        {
            AudioItem item = context.AudioItems.Where(item => item.Id == id).First();

            if (item != null)
            {
                context.AudioItems.Remove(item);
                return await context.SaveChangesAsync() > 0;
            }
            else
            {
                throw new ApplicationException("Not Found");
            }
        }

        public async Task<AudioItem> GetAudioItemByIdOrName(int? id = null, string? name = null)
        {
            AudioItem item;

            if (id != null)
            {
                return await context.AudioItems.Where(item => item.Id == id!).FirstOrDefaultAsync();
               
            }
            else
            {
                return await context.AudioItems.Where(item => item.Name == name!).FirstOrDefaultAsync();
            }
        }

        public async Task<List<AudioItem>> GetAudioItems()
        {
            return await context.AudioItems.ToListAsync();
        }
    }
}
