import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent implements OnInit{
  id!: number;
  student!: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data=>{
      this.student = data;
    })
  }

}
