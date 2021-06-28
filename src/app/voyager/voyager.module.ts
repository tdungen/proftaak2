import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoyagerPageRoutingModule } from './voyager-routing.module';

import { VoyagerPage } from './voyager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoyagerPageRoutingModule
  ],
  declarations: [VoyagerPage]
})
export class VoyagerPageModule {}
