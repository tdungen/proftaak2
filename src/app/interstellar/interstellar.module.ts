import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterstellarPageRoutingModule } from './interstellar-routing.module';

import { InterstellarPage } from './interstellar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterstellarPageRoutingModule
  ],
  declarations: [InterstellarPage]
})
export class InterstellarPageModule {}
