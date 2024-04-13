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
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  students: Student[] | undefined;
  isLoggedIn!: boolean

  constructor(private studentService: StudentService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.getStudents();
    this.isLoggedIn = this.authService.isLoggedIn;
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
