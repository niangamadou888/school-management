import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../student/student.service';
import { NgFor } from '@angular/common';
import { YearService } from '../../year/year.service';
import { CourService } from '../../cours/cour.service';
import { Cour } from '../../cours/cour';
import { Student } from '../../student/student';
import { Year } from '../../year/year';

@Component({
  selector: 'app-update-registration',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './update-registration.component.html'
})
export class UpdateRegistrationComponent {
  id!: number;
  registration: Registration = new Registration();
  students: Student[] | undefined;
  cours: Cour[] | undefined;
  years: Year[] | undefined;

  constructor(private yearService: YearService, private courService: CourService,private studentService: StudentService,private registrationService: RegistrationService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.getStudents();
    this.getCours();
    this.getYears();
    this.id = this.route.snapshot.params['id'];
      this.registrationService.getRegistrationById(this.id).subscribe(data=>{
        this.registration= data;
      }, error=>{
        console.log(error);
      });
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

  goToRegistrationList(){
    this.router.navigate(['/registrations']);
  }

  onSubmit(){
    this.registrationService.updateRegistration(this.id, this.registration).subscribe(data=>{
      this.goToRegistrationList();
    }, error=>{
      console.log(error);
    });
  }
}
