import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    student: Student;
    students: Student[];

    constructor(private studentService: StudentService) {
        this.student = new Student();
        this.students = new Array();
    }

    ngOnInit(): void {
        this.studentService.getStudents()
        .subscribe(data => this.students = data);
    }

    onSubmit() {
        this.studentService.addStudent(this.student)
        .subscribe(data => {
            this.students.push(data);
            this.student = new Student();
        });
    }

}
