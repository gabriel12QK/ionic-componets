import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalesPage } from './modales.page';

const routes: Routes = [
  {
    path: '',
    component: ModalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalesPageRoutingModule {}
