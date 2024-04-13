import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-student.component.html'
})
export class UpdateStudentComponent implements OnInit{
  id!: number;
  student: Student = new Student();

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.studentService.getStudentById(this.id).subscribe(data=>{
        this.student= data;
      }, error=>{
        console.log(error);
      });
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(data=>{
      this.goToStudentList();
    }, error=>{
      console.log(error);
    });
  }
}
