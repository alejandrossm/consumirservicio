import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipocomidasPageRoutingModule } from './tipocomidas-routing.module';

import { TipocomidasPage } from './tipocomidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipocomidasPageRoutingModule
  ],
  declarations: [TipocomidasPage]
})
export class TipocomidasPageModule {}
