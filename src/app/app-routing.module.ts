import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from '../app/product-add/product-add.component';
import { ProductEditComponent } from '../app/product-edit/product-edit.component';
import { ProductListComponent } from '../app/product-list/product-list.component';
const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'edit', component: ProductEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
