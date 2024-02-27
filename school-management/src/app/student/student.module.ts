import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const studentRoutes: Routes = [
  { path: 'create-student', component: CreateStudentComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes)
  ],
  providers: [StudentService]
})
export class StudentModule { }
