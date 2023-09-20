import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:22547/api';

  constructor(private http: HttpClient) { }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/students`, student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/students/${student.id}`, student);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }
}
