import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadescolaPageRoutingModule } from './cadescola-routing.module';

import { CadescolaPage } from './cadescola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadescolaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadescolaPage]
})
export class CadescolaPageModule {}
