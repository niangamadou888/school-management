import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { YearService } from '../year.service';
import { Router } from '@angular/router';
import { Year } from '../year';

@Component({
  selector: 'app-year-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './year-list.component.html',
  styleUrl: './year-list.component.css'
})
export class YearListComponent {
  years: Year[] | undefined;

  constructor(private yearService: YearService, private router: Router){}

  ngOnInit(): void {
    this.getYears();
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
