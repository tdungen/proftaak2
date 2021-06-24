import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeverlandPageRoutingModule } from './neverland-routing.module';

import { NeverlandPage } from './neverland.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeverlandPageRoutingModule
  ],
  declarations: [NeverlandPage]
})
export class NeverlandPageModule {}
