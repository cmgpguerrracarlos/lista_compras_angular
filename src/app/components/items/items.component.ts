import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/Item'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[]= [];
  total: number= 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {id:0, title:"Pan",price:40,quantity:1,completed:false},
      {id:1, title:"Rosca",price:40,quantity:1,completed:true},
      {id:2, title:"Galleta",price:40,quantity:1,completed:false},
      {id:3, title:"Tortuga",price:40,quantity:1,completed:false}
    ]
    this.getTotal();
  }

  toggleItem(item: Item){
    this.getTotal();
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id !== item.id );
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                      .filter(x => !x.completed)
                      .map(x => x.quantity * x.price)
                      .reduce((acc, item) => acc += item, 0);
  }
}
