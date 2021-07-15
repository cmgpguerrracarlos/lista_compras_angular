import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemsComponent } from './components/additems/additems.component';
import { ItemsComponent } from './components/items/items.component';



const routes: Routes = [
  {
    path:'',
    component:ItemsComponent
  },
  {
    path:'add',
    component:AdditemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }