import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackpantherPageRoutingModule } from './blackpanther-routing.module';

import { BlackpantherPage } from './blackpanther.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackpantherPageRoutingModule
  ],
  declarations: [BlackpantherPage]
})
export class BlackpantherPageModule {}
