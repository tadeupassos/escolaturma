import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadescolaPage } from './cadescola.page';

const routes: Routes = [
  {
    path: '',
    component: CadescolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadescolaPageRoutingModule {}
