import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-manager-homepage',
  template: ``,
  styles: [``]
})
export class ManagerHomepageComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
        let stringUser = localStorage.getItem('currentUser');
        let student: Student =  stringUser ? JSON.parse(stringUser) : null;
        if (student) {
            this.router.navigate(['/students']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }

}
