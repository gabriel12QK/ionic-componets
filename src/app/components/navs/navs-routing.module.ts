import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavsPage } from './navs.page';

const routes: Routes = [
  {
    path: '',
    component: NavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavsPageRoutingModule {}
