import { RegistrationService } from './registration/registration.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AppRoutingModule } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentService } from './student/student.service';
import { CourListComponent } from './cours/cour-list/cour-list.component';
import { CourService } from './cours/cour.service';
import { YearService } from './year/year.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StudentListComponent, AppRoutingModule, HttpClientModule, CourListComponent],
  providers:[StudentService, CourService, YearService, RegistrationService, HttpClient, AuthService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'school-management';
}
