import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalesPageRoutingModule } from './modales-routing.module';

import { ModalesPage } from './modales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalesPageRoutingModule
  ],
  declarations: [ModalesPage]
})
export class ModalesPageModule {}
