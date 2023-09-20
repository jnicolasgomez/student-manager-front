import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      // After successful deletion, update the list of students
      this.loadStudents();
    });
  }
}
