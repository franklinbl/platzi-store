import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutingModule,
    MaterialModule
  ]
})
export class PageNotFoundModule {

}
