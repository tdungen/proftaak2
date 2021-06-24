import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreenlandPageRoutingModule } from './greenland-routing.module';

import { GreenlandPage } from './greenland.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreenlandPageRoutingModule
  ],
  declarations: [GreenlandPage]
})
export class GreenlandPageModule {}
