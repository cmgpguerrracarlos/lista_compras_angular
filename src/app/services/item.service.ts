import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  lista:Item[] = [
    {id:0, title:"Pan",price:40,quantity:1,completed:false},
    {id:1, title:"Rosca",price:40,quantity:1,completed:true},
    {id:2, title:"Galleta",price:40,quantity:1,completed:false},
    {id:3, title:"Tortuga",price:40,quantity:1,completed:false}
  ];

  constructor() { }
  
  getItems(){
    return this.lista;
  }

  addItem(item:Item){
    this.lista.unshift(item);
  }

}