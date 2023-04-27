import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OtroComponent } from './components/otro/otro.component';
import { StudentsComponent } from './components/students/students.component';
import { ManagerHomepageComponent } from './components/manager-homepage/manager-homepage.component';
import { StudentService } from './service/student.service';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { ChildPathOneComponent } from './components/child-path-one/child-path-one.component';
import { ChildPathTwoComponent } from './components/child-path-two/child-path-two.component';
import { ChildPathThreeComponent } from './components/child-path-three/child-path-three.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    OtroComponent,
    StudentsComponent,
    ManagerHomepageComponent,
    StudentInfoComponent,
    ChildPathOneComponent,
    ChildPathTwoComponent,
    ChildPathThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
