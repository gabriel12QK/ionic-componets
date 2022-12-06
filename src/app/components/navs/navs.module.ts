import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavsPageRoutingModule } from './navs-routing.module';

import { NavsPage } from './navs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavsPageRoutingModule
  ],
  declarations: [NavsPage]
})
export class NavsPageModule {}
