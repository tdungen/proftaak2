import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptainmarvelPageRoutingModule } from './captainmarvel-routing.module';

import { CaptainmarvelPage } from './captainmarvel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaptainmarvelPageRoutingModule
  ],
  declarations: [CaptainmarvelPage]
})
export class CaptainmarvelPageModule {}
