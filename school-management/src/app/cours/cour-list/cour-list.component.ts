import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Cour } from '../cour';
import { CourService } from '../cour.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cour-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cour-list.component.html'
})
export class CourListComponent {
  cours: Cour[] | undefined;
  isLoggedIn!: boolean

  constructor(private courService: CourService, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.getCours();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  private getCours(){
  this.courService.getCourList().subscribe(data => {
    this.cours = data;
  })
  }

  courDetails(id:number){
    this.router.navigate(['cour-details',id]);
  }

  goToCreateCour(){
    this.router.navigate(['create-cour'])
  }

  updateCour(id: number){
    this.router.navigate(['update-cour', id]);
  }

  deleteCour(id: number){
    this.courService.deleteCour(id).subscribe( data=> {
      console.log(data);
      this.getCours()
    })
  }
}
