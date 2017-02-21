import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';

let _routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: '**', component: NoContentComponent },
];

export const ROUTES = RouterModule.forRoot(
  _routes,
  { useHash: Boolean(history.pushState) === false, preloadingStrategy: PreloadAllModules });
