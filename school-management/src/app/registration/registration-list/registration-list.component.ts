import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './registration-list.component.html',
  styleUrl: './registration-list.component.css'
})
export class RegistrationListComponent {
  registrations: Registration[] | undefined;
  

  constructor(private registrationService: RegistrationService, private router: Router){}

  ngOnInit(): void {
    this.getRegistrations();
    
  }

  

  private getRegistrations(){
  this.registrationService.getRegistrationList().subscribe(data => {
    this.registrations = data;
  })
  }

  registrationDetails(id:number){
    this.router.navigate(['registration-details',id]);
  }

  goToCreateRegistration(){
    this.router.navigate(['create-registration'])
  }

  updateRegistration(id: number){
    this.router.navigate(['update-registration', id]);
  }

  deleteRegistration(id: number){
    this.registrationService.deleteRegistration(id).subscribe( data=> {
      console.log(data);
      this.getRegistrations()
    })
  }
}
