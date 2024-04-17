import { Component } from '@angular/core';
import { Registration } from '../registration';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-details',
  standalone: true,
  imports: [],
  templateUrl: './registration-details.component.html',
  styleUrl: './registration-details.component.css'
})
export class RegistrationDetailsComponent {
  id!: number;
  registration!: Registration;

  constructor(private route: ActivatedRoute, private registrationService: RegistrationService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.registrationService.getRegistrationById(this.id).subscribe(data=>{
      this.registration = data;
    })
  }
}
