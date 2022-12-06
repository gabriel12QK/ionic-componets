import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollPagePageRoutingModule } from './scroll-page-routing.module';

import { ScrollPagePage } from './scroll-page.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollPagePageRoutingModule
  ],
  declarations: [ScrollPagePage]
})
export class ScrollPagePageModule {}
