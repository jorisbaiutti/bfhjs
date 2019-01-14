import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'customerdetails', component: CustomerdetailsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
