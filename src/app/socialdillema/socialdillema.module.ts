import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialdillemaPageRoutingModule } from './socialdillema-routing.module';

import { SocialdillemaPage } from './socialdillema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialdillemaPageRoutingModule
  ],
  declarations: [SocialdillemaPage]
})
export class SocialdillemaPageModule {}
