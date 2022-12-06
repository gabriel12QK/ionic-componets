import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./components/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./components/slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./components/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./components/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./components/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'scroll-page',
    loadChildren: () => import('./components/scroll-page/scroll-page.module').then( m => m.ScrollPagePageModule)
  },
  {
    path: 'modales',
    loadChildren: () => import('./components/modales/modales.module').then( m => m.ModalesPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./components/reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'navs',
    loadChildren: () => import('./components/navs/navs.module').then( m => m.NavsPageModule)
  },
  {
    path: 'mapa-google',
    loadChildren: () => import('./mapa-google/mapa-google.module').then( m => m.MapaGooglePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
