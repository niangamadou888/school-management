import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { StudentListComponent } from '../../student/student-list/student-list.component';
import { Student } from '../../student/student';
import { CourService } from '../../cours/cour.service';
import { StudentService } from '../../student/student.service';
import { Cour } from '../../cours/cour';
import { Year } from '../../year/year';
import { YearService } from '../../year/year.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-create-registration',
  standalone: true,
  imports: [FormsModule, StudentListComponent, NgFor],
  templateUrl: './create-registration.component.html'
})
export class CreateRegistrationComponent implements OnInit{
  registration: Registration = new Registration();
  students: Student[] | undefined;
  cours: Cour[] | undefined;
  years: Year[] | undefined;

  constructor(private registrationService: RegistrationService, private yearService: YearService, private courService: CourService ,private studentService: StudentService, private router: Router){}

  ngOnInit(): void {
    this.getStudents();
    this.getCours();
    this.getYears();
  }

  private getCours(){
    this.courService.getCourList().subscribe(data => {
      this.cours = data;
    })
    }

    private getYears(){
      this.yearService.getYearList().subscribe(data => {
        this.years = data;
      })
    }

  private getStudents(){
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    })
    }

  saveRegistration(){
    this.registrationService.createRegistration(this.registration).subscribe( data =>{
      console.log(data);
      this.goToRegistrationList();
    },
    error => console.log(error));
  }
  
  goToRegistrationList(){
    this.router.navigate(['/registrations']);
  }

  onSubmit(){
    this.saveRegistration();
  }
}
