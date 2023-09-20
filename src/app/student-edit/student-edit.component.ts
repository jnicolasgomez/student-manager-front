import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  editedStudent: Student = new Student();
  studentId!: number;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = +params['id'];
      // Fetch the student data by ID and set it to the editedStudent object
      // this.studentService.getStudentById(this.studentId).subscribe((student) => {
      //   this.editedStudent = student;
      // });
    });
  }

  onSubmit(): void {
    this.studentService.updateStudent(this.editedStudent).subscribe((response) => {
      console.log('Student updated successfully:', response);
    }, (error) => {
      console.error('Error updating student:', error);
    });
  }
}
