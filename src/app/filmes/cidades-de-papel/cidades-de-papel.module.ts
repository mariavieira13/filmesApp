import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CidadesDePapelPageRoutingModule } from './cidades-de-papel-routing.module';

import { CidadesDePapelPage } from './cidades-de-papel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CidadesDePapelPageRoutingModule
  ],
  declarations: [CidadesDePapelPage]
})
export class CidadesDePapelPageModule {}
