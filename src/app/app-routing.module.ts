import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    canActivate : [authGuard]
  },
  {
    path:'auth',
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
