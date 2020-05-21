import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadturmaPageRoutingModule } from './cadturma-routing.module';

import { CadturmaPage } from './cadturma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadturmaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadturmaPage]
})
export class CadturmaPageModule {}
