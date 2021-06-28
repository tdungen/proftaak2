import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LionkingPageRoutingModule } from './lionking-routing.module';

import { LionkingPage } from './lionking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LionkingPageRoutingModule
  ],
  declarations: [LionkingPage]
})
export class LionkingPageModule {}
