import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';

const routes: Routes =[
    // { path: 'home',      component: HomeComponent },
    // { path: 'admin',      component: AdminComponent },
    { path: 'login',      component: LoginComponent },
    { path: '',          redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
