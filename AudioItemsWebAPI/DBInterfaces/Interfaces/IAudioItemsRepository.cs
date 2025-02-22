﻿using AudioItemsWebAPI.Models;

namespace AudioItemsWebAPI.DBInterfaces.Interfaces
{
    public interface IAudioItemsRepository
    {
        Task<List<AudioItem>> GetAudioItems();

        Task<bool> AddAudioItem(AudioItem item);

        Task<bool> DeleteAudioItem(int id);

        Task<AudioItem> GetAudioItemDetailsById(int id);
    }
}
