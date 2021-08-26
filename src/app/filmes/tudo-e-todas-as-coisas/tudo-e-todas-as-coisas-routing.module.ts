import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TudoETodasAsCoisasPage } from './tudo-e-todas-as-coisas.page';

const routes: Routes = [
  {
    path: '',
    component: TudoETodasAsCoisasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TudoETodasAsCoisasPageRoutingModule {}
