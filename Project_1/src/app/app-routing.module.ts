import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to login
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
