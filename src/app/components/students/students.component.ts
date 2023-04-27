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
        if (this.student.id) {
            this.studentService.updateStudent(this.student)
            .subscribe(data => {
                this.students = this.students.map(s => s.id === data.id ? data : s);
                this.student = new Student();
            });
        }
        else {
            this.studentService.addStudent(this.student)
            .subscribe(data => {
                this.students.push(data);
                this.student = new Student();
            });
        }
    }

    onUpdate(student: Student) {
        this.student = student;
    }

    onDelete(id: number) {
        this.studentService.deleteStudent(id)
        .subscribe(data => {
            this.students = this.students.filter(s => s.id !== id);
        });
    }

}
