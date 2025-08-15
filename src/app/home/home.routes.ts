import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { HomePage } from './home.page';

export const routes: Routes = [
  { path: '', component: HomePage, canActivate: [authGuard] }
];