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
        [Route("~/api/GetAudioItemsByName")]
        public async Task<AudioItem> GetAudioItemByName(string name)
        {
            return await repository.GetAudioItemByIdOrName(null, name);
        }


        [HttpGet]
        [Route("~/api/GetAudioItemsById")]
        public async Task<AudioItem> GetAudioItemById(int id)
        {
            return await repository.GetAudioItemByIdOrName(id, string.Empty);
        }

        [HttpPost]
        [Route("~/api/DeleteAudioItemById")]
        public async Task<bool> DeleteAudioItemById(int id)
        {
            return await repository.DeleteAudioItem(id);            
        }



    }
}
