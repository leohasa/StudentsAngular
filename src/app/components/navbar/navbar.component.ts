import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(private router: Router) { }

    userLoggedIn() {
        return localStorage.getItem('currentUser') ? true : false;
    }

    logOut() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/homepage']);
    }

    getUserEmail() {
        let stringUser = localStorage.getItem('currentUser');
        let student: Student = stringUser ? JSON.parse(stringUser) : null;
        return student ? student.email : '';
    }
}
