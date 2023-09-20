import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  newStudent: Student = new Student();

  constructor(private studentService: StudentService) { }

  onSubmit(): void {
    this.studentService.createStudent(this.newStudent).subscribe((response) => {
      console.log('Student created successfully:', response);
      this.newStudent = new Student();
    }, (error) => {
      console.error('Error creating student:', error);
    });
  }
}
