import { Component, inject, OnInit } from '@angular/core';
import { AudioItemsService } from '../_services/audioitemsservice.service';
import { AudioItem, ItemTypes } from '../_models/AudioItem';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  title: string;
  id?: number;

  ngOnInit(): void {
    this.form = new FormGroup({
      itemType: new FormControl(''),
      brand: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl('')
    });

    this.title = '';
    this.itemTypesList = [];
    this.loadItemTypesList();
    this.loadData();
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  loadData() {
    var idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;

    if (this.id) {
      this.audioItemsService.getAudioItemDetailsById(this.id)
        .subscribe({
          next: (item) => {
            this.model = item;
            
            this.title = "Edit - " + this.model.name;            

            this.form.patchValue(this.model);
          }
        });
    }//end of if
    else {
      this.title = "Create a new Audio Item";
    }//End of else
  }

  loadItemTypesList() {
    const stringValues = Object
      .values(ItemTypes);

    stringValues.forEach(value => {
      this.itemTypesList?.push(value);
    });
  }

  onSubmit() {
    var audioItem = (this.id) ? this.model : <AudioItem>{};
    if (audioItem) {
      audioItem.itemType = this.form.controls['itemType'].value;
      audioItem.name = this.form.controls['name'].value;
      audioItem.brand = this.form.controls['brand'].value;
      audioItem.description = this.form.controls['description'].value;
      audioItem.price = +this.form.controls['price'].value;      

      if (this.id) { //Existing audio item so edit mode
        this.audioItemsService.updateAudioItem(audioItem, this.id);
      }
      else {        
        this.audioItemsService.addNewAudioItem(audioItem);
      }      
    }//end of if

    this.router.navigate(['/home']);
    
  }

}
