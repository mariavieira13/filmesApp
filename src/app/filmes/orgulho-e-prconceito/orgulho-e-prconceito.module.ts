import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgulhoEPrconceitoPageRoutingModule } from './orgulho-e-prconceito-routing.module';

import { OrgulhoEPrconceitoPage } from './orgulho-e-prconceito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgulhoEPrconceitoPageRoutingModule
  ],
  declarations: [OrgulhoEPrconceitoPage]
})
export class OrgulhoEPrconceitoPageModule {}
