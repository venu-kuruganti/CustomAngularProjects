import { Component, inject, OnInit } from '@angular/core';
import { AudioItemsService } from '../_services/audioitemsservice.service';
import { AudioItem, ItemTypes } from '../_models/AudioItem';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit {

  private audioItemsService = inject(AudioItemsService);
  itemTypesList?: string[];
  model?: AudioItem;
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      ItemType: new FormControl(''),
      Brand: new FormControl(''),
      Name: new FormControl(''),
      Description: new FormControl(''),
      Price: new FormControl('')
    });
    this.itemTypesList = [];
    this.loadItemTypesList();
  }

  constructor() {

    console.log("itemTypesList is : ");
    console.log(this.itemTypesList);
  }

  loadItemTypesList() {
    const stringValues = Object
      .values(ItemTypes);

    stringValues.forEach(value => {
      this.itemTypesList?.push(value);
    });
  }

  onSubmit() {
    this.model = <AudioItem>{};
    this.model.id = 0;
    this.model.itemType = this.form.controls['ItemType'].value;
    this.model.name = this.form.controls['Name'].value;
    this.model.brand = this.form.controls['Brand'].value;
    this.model.description = this.form.controls['Description'].value;
    this.model.price = +this.form.controls['Price'].value;

    this.audioItemsService.addNewAudioItem(this.model);
  }

}
