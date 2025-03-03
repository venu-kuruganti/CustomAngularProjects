
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Contracts;
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

        public async Task<bool> UpdateAudioItem(AudioItem item, int id)
        {
            var existingItem = await context.AudioItems.Where(i => i.Id == id).FirstOrDefaultAsync();

            if (existingItem != null)
            {
                var entityType = typeof(AudioItem);
                var properties = entityType.GetProperties();

                foreach (var property in properties)
                {
                    // Skip primary key properties to avoid accidental modification
                    if (property.GetCustomAttributes(typeof(KeyAttribute), true).Length > 0)
                        continue;

                    // Get new value
                    var newValue = property.GetValue(item);
                    var existingValue = property.GetValue(existingItem);

                    // Update only if the new value is different
                    if (newValue != null && !newValue.Equals(existingValue))
                    {
                        property.SetValue(existingItem, newValue);
                        context.Entry(existingItem).Property(property.Name).IsModified = true;
                    }
                }

                return context.SaveChanges() > 0;
            }

            return true;
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
        public async Task<AudioItem> GetAudioItemDetailsById(int id)
        {
            return await context.AudioItems.Where(item => item.Id == id).FirstOrDefaultAsync();
        }

        public async Task<List<AudioItem>> GetAudioItems()
        {
            return await context.AudioItems.ToListAsync();
        }
    }
}
