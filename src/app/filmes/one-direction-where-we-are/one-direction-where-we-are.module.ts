import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneDirectionWhereWeArePageRoutingModule } from './one-direction-where-we-are-routing.module';

import { OneDirectionWhereWeArePage } from './one-direction-where-we-are.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneDirectionWhereWeArePageRoutingModule
  ],
  declarations: [OneDirectionWhereWeArePage]
})
export class OneDirectionWhereWeArePageModule {}
