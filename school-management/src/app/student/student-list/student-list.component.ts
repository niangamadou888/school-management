import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] | undefined;
  auth!: AuthService;

  constructor(private studentService: StudentService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.getStudents();
    this.auth = this.authService;
  }

  private getStudents(){
  this.studentService.getStudentList().subscribe(data => {
    this.students = data;
  })
  }

  studentDetails(id:number){
    this.router.navigate(['student-details',id]);
  }

  goToCreateStudent(){
    this.router.navigate(['create-student'])
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data=> {
      console.log(data);
      this.getStudents()
    })
  }
}
