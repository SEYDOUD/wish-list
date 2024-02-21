import { Component, Input, Output , EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/model/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  
  newWishText = "";
  addNewWish(){
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = ""
  }
  
}