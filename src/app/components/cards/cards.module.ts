import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';
import {  PipeModule  } from 'src/app/pipes/pipe/pipe.module';
import { CardsPage } from './cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPageRoutingModule,
    PipeModule
  ],
  declarations: [CardsPage]
})
export class CardsPageModule {}
