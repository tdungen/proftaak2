import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopulairPageRoutingModule } from './populair-routing.module';

import { PopulairPage } from './populair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopulairPageRoutingModule
  ],
  declarations: [PopulairPage]
})
export class PopulairPageModule {}
