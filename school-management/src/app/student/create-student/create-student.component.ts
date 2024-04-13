import { Component } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-student.component.html'
})
export class CreateStudentComponent {
  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router){}

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }
  
  goToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.saveStudent();
  }

}
