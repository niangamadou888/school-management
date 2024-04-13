import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cour } from '../cour';
import { CourService } from '../cour.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cour',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-cour.component.html'
})
export class UpdateCourComponent {
  id!: number;
  cour: Cour = new Cour();

  constructor(private courService: CourService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.courService.getCourById(this.id).subscribe(data=>{
        this.cour= data;
      }, error=>{
        console.log(error);
      });
  }

  goToCourList(){
    this.router.navigate(['/cours']);
  }

  onSubmit(){
    this.courService.updateCour(this.id, this.cour).subscribe(data=>{
      this.goToCourList();
    }, error=>{
      console.log(error);
    });
  }
}
