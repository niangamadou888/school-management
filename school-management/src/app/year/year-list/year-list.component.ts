import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { YearService } from '../year.service';
import { Router } from '@angular/router';
import { Year } from '../year';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-year-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './year-list.component.html'
})
export class YearListComponent {
  years: Year[] | undefined;
  isLoggedIn!: boolean;

  constructor(private yearService: YearService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.getYears();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  private getYears(){
  this.yearService.getYearList().subscribe(data => {
    this.years = data;
  })
  }

  yearDetails(id:number){
    this.router.navigate(['year-details',id]);
  }

  goToCreateYear(){
    this.router.navigate(['create-year'])
  }

  updateYear(id: number){
    this.router.navigate(['update-year', id]);
  }

  deleteYear(id: number){
    this.yearService.deleteYear(id).subscribe( data=> {
      console.log(data);
      this.getYears()
    })
  }
}
