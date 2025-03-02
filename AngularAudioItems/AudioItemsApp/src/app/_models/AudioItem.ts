export enum ItemTypes
{
    AVReceiver = "AV Receiver",
    TowerSpeaker = "Tower Speaker",
    CentreSpeaker = "Centre Speaker",
    BookShelfSpeaker = "Bookshelf Speaker",
    Subwoofer = "Subwoofer"
}

export interface AudioItem {
    id: number;
    itemType: string;
    brand: string;
    name: string;
    description: string;
    price: number;
  }
  