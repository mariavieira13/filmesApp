import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneDirectionThisIsUsPage } from './one-direction-this-is-us.page';

const routes: Routes = [
  {
    path: '',
    component: OneDirectionThisIsUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneDirectionThisIsUsPageRoutingModule {}
