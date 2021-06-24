import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwakePageRoutingModule } from './awake-routing.module';

import { AwakePage } from './awake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwakePageRoutingModule
  ],
  declarations: [AwakePage]
})
export class AwakePageModule {}
