import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TellmePageRoutingModule } from './tellme-routing.module';

import { TellmePage } from './tellme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TellmePageRoutingModule
  ],
  declarations: [TellmePage]
})
export class TellmePageModule {}
