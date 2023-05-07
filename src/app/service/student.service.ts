import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    url: string = 'http://localhost:8080/StudentsApi';

    constructor(private http: HttpClient) { }

    logIn(student: Student) {
        return this.http.post<Student>(`${this.url}/login`, student);
    }

    getStudents() {
        return this.http.get<Student[]>(`${this.url}/students`);
    }

    getStudentById(id: number) {
        return this.http.get<Student>(`${this.url}/students/${id}`);
    }

    addStudent(student: Student) {
        return this.http.post<Student>(`${this.url}/students`, student);
    }

    updateStudent(student: Student) {
        return this.http.put<Student>(`${this.url}/students/${student.id}`, student);
    }

    deleteStudent(id: number) {
        return this.http.delete<Student>(`${this.url}/students/${id}`);
    }

    exportStudents() {
        return this.http.get(`${this.url}/report`, { responseType: 'blob' });
    }
}
