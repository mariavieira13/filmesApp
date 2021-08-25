import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneDirectionThisIsUsPageRoutingModule } from './one-direction-this-is-us-routing.module';

import { OneDirectionThisIsUsPage } from './one-direction-this-is-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneDirectionThisIsUsPageRoutingModule
  ],
  declarations: [OneDirectionThisIsUsPage]
})
export class OneDirectionThisIsUsPageModule {}
