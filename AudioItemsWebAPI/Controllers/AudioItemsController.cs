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
        public async Task<bool> AddNewAudioItem([FromBody] AudioItem item)
        {
            return await repository.AddAudioItem(item);
        }

        [HttpPut]
        [Route("~/api/UpdateAudioItem/{id}")]
        public async Task<bool> UpdateAudioItem(int id, [FromBody] AudioItem item)
        {            
            return await repository.UpdateAudioItem(item, id);
        }

        [HttpGet]
        [Route("~/api/GetAudioItemDetailsById/{id}")]
        public async Task<AudioItem> GetAudioItemDetailsById(int id)
        {
            return await repository.GetAudioItemDetailsById(id);
        }

        [HttpPost]
        [Route("~/api/DeleteAudioItemById/{id}")]
        public async Task<bool> DeleteAudioItemById(int id)
        {
            return await repository.DeleteAudioItem(id);            
        }

    }
}
