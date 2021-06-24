import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivergentPageRoutingModule } from './divergent-routing.module';

import { DivergentPage } from './divergent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivergentPageRoutingModule
  ],
  declarations: [DivergentPage]
})
export class DivergentPageModule {}
