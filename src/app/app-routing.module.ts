import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OtroComponent } from './components/otro/otro.component';
import { StudentsComponent } from './components/students/students.component';
import { ManagerHomepageComponent } from './components/manager-homepage/manager-homepage.component';
import { ChildPathOneComponent } from './components/child-path-one/child-path-one.component';
import { ChildPathTwoComponent } from './components/child-path-two/child-path-two.component';
import { ChildPathThreeComponent } from './components/child-path-three/child-path-three.component';

const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'homepage', component: ManagerHomepageComponent },
    {
        path: 'otro', component: OtroComponent, children: [
            { path: 'one', component: ChildPathOneComponent },
            { path: 'two', component: ChildPathTwoComponent },
            { path: 'three', component: ChildPathThreeComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
