import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {

    @Input() student!: Student;
    @Output() studentChange: EventEmitter<Student> = new EventEmitter<Student>();
    @Output() deleteStudentChange: EventEmitter<number> = new EventEmitter<number>();


    updateStudent() {
        this.studentChange.emit(Object.assign({}, this.student));
    }

    deleteStudent() {
        this.deleteStudentChange.emit(this.student.id);
    }
}
