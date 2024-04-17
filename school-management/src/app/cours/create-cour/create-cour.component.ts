import { CourService } from './../cour.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cour } from '../cour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cour',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-cour.component.html',
  styleUrl: './create-cour.component.css'
})
export class CreateCourComponent {
  cour: Cour = new Cour();

  constructor(private courService: CourService, private router: Router){}

  saveCour(){
    this.courService.createCour(this.cour).subscribe( data =>{
      console.log(data);
      this.goToCourList();
    },
    error => console.log(error));
  }
  
  goToCourList(){
    this.router.navigate(['/cours']);
  }

  onSubmit(){
    this.saveCour();
  }
}
