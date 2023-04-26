import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OtroComponent } from './components/otro/otro.component';
import { StudentsComponent } from './components/students/students.component';
import { ManagerHomepageComponent } from './components/manager-homepage/manager-homepage.component';

const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'otro', component: OtroComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'homepage', component: ManagerHomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
