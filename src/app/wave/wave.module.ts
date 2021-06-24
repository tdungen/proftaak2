import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WavePageRoutingModule } from './wave-routing.module';

import { WavePage } from './wave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WavePageRoutingModule
  ],
  declarations: [WavePage]
})
export class WavePageModule {}
