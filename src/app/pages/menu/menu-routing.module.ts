import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'escolas',
        children: [
          {
            path: '',
            loadChildren: () => import('../escolas/escolas.module').then( m => m.EscolasPageModule)
          }
        ]
      },
      {
        path: 'cadescola',
        children: [
          {
            path: '',
            loadChildren: () => import('../cadescola/cadescola.module').then( m => m.CadescolaPageModule)
          }
        ]
      },
      {
        path: 'turmas',
        children: [
          {
            path: '',
            loadChildren: () => import('../turmas/turmas.module').then( m => m.TurmasPageModule)
          }
        ]
      },
      {
        path: 'cadturmas',
        children: [
          {
            path: '',
            loadChildren: () => import('../cadturma/cadturma.module').then( m => m.CadturmaPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/menu/escolas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/escolas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
