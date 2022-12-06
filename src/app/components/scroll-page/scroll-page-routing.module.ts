import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollPagePage } from './scroll-page.page';

const routes: Routes = [
  {
    path: '',
    component: ScrollPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollPagePageRoutingModule {}
