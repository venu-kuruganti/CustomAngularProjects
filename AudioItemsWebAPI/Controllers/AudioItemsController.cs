using AudioItemsWebAPI.DBInterfaces.Interfaces;
using AudioItemsWebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AudioItemsWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AudioItemsController(IAudioItemsRepository repository) : ControllerBase
    {

        [HttpGet]        
        public async Task<List<AudioItem>> GetAudioItems()
        {
            return await repository.GetAudioItems();
        }

        [HttpPost]
        [Route("~/api/AddNewAudioItem")]
        public async Task<bool> AddNewAudioItem(AudioItem item)
        {
            return await repository.AddAudioItem(item);
        }

        [HttpGet]
        [Route("~/api/GetAudioItemDetailsById")]
        public async Task<AudioItem> GetAudioItemDetailsById(int id)
        {
            return await repository.GetAudioItemDetailsById(id);
        }

        [HttpPost]
        [Route("~/api/DeleteAudioItemById")]
        public async Task<bool> DeleteAudioItemById(int id)
        {
            return await repository.DeleteAudioItem(id);            
        }

    }
}
