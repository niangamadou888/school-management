import { YearService } from './../year.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Year } from '../year';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-year',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-year.component.html',
  styleUrl: './create-year.component.css'
})
export class CreateYearComponent {
  year: Year = new Year();

  constructor(private yearService: YearService, private router: Router){}

  saveYear(){
    this.yearService.createYear(this.year).subscribe( data =>{
      console.log(data);
      this.goToYearsList();
    },
    error => console.log(error));
  }
  
  goToYearsList(){
    this.router.navigate(['/years']);
  }

  onSubmit(){
    this.saveYear();
  }
}
