import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { MainComponent } from './main.component';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule('todo', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: MainComponent,
  },
];
