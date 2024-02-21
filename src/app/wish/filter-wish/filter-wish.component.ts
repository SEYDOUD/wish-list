import { Component, Output , Input,  EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../../shared/model/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
]

let start = 1

@Component({
  selector: 'filter-wish',
  templateUrl: './filter-wish.component.html',
  styleUrl: './filter-wish.component.css'
})
export class FilterWishComponent implements OnInit{
  @Input() filter : any;
  @Output() filterChange = new EventEmitter<any>();

  constructor(){ }
  // to show automaticaly the wishes items
  
  ngOnInit(): void {
    this.updateFilter(start)
  }

  listFilter: any = start

  updateFilter(value : any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
