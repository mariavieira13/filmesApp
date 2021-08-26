import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidadesDePapelPage } from './cidades-de-papel.page';

const routes: Routes = [
  {
    path: '',
    component: CidadesDePapelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CidadesDePapelPageRoutingModule {}
