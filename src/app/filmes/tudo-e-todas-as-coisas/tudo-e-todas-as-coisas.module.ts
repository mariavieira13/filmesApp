import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TudoETodasAsCoisasPageRoutingModule } from './tudo-e-todas-as-coisas-routing.module';

import { TudoETodasAsCoisasPage } from './tudo-e-todas-as-coisas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TudoETodasAsCoisasPageRoutingModule
  ],
  declarations: [TudoETodasAsCoisasPage]
})
export class TudoETodasAsCoisasPageModule {}
