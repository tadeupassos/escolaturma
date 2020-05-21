import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolasPageRoutingModule } from './escolas-routing.module';

import { EscolasPage } from './escolas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EscolasPage]
})
export class EscolasPageModule {}
