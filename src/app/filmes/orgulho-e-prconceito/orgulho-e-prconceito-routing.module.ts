import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgulhoEPrconceitoPage } from './orgulho-e-prconceito.page';

const routes: Routes = [
  {
    path: '',
    component: OrgulhoEPrconceitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgulhoEPrconceitoPageRoutingModule {}
