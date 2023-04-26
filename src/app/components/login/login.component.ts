import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    student!: Student;
    error: boolean = false;

    constructor(private studentService: StudentService, private router: Router) {
        this.student = new Student();
    }

    onSubmit() {
        this.studentService.logIn(this.student)
        .subscribe(user => {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.router.navigate(['/homepage']);
            }
        }, error => console.log('Error: ' + error));
    }

}
