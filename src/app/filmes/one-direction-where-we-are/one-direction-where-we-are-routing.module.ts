import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneDirectionWhereWeArePage } from './one-direction-where-we-are.page';

const routes: Routes = [
  {
    path: '',
    component: OneDirectionWhereWeArePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneDirectionWhereWeArePageRoutingModule {}
