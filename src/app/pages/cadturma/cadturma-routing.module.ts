import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadturmaPage } from './cadturma.page';

const routes: Routes = [
  {
    path: '',
    component: CadturmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadturmaPageRoutingModule {}
