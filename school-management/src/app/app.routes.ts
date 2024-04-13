import { CreateRegistrationComponent } from './registration/create-registration/create-registration.component';
import { RegistrationListComponent } from './registration/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CourListComponent } from './cours/cour-list/cour-list.component';
import { CreateCourComponent } from './cours/create-cour/create-cour.component';
import { UpdateCourComponent } from './cours/update-cour/update-cour.component';
import { YearListComponent } from './year/year-list/year-list.component';
import { CreateYearComponent } from './year/create-year/create-year.component';
import { UpdateYearComponent } from './year/update-year/update-year.component';
import { UpdateRegistrationComponent } from './registration/update-registration/update-registration.component';
import { RegistrationDetailsComponent } from './registration/registration-details/registration-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: "students", component: StudentListComponent },
    { path: "login", component: LoginComponent },
    { path: "cours", component: CourListComponent },
    { path: "years", component: YearListComponent },
    { path: "registrations", component: RegistrationListComponent },
    { path: "create-student", component: CreateStudentComponent, canActivate: [AuthGuard] },
    { path: "create-cour", component: CreateCourComponent, canActivate: [AuthGuard] },
    { path: "create-year", component: CreateYearComponent, canActivate: [AuthGuard] },
    { path: "create-registration", component: CreateRegistrationComponent, canActivate: [AuthGuard] },
    { path: "", redirectTo: 'students', pathMatch: 'full' },
    { path: 'update-student/:id', component: UpdateStudentComponent, canActivate: [AuthGuard] },
    { path: 'update-cour/:id', component: UpdateCourComponent, canActivate: [AuthGuard] },
    { path: "update-year/:id", component: UpdateYearComponent, canActivate: [AuthGuard] },
    { path: "update-registration/:id", component: UpdateRegistrationComponent, canActivate: [AuthGuard] },
    { path: 'student-details/:id', component: StudentDetailsComponent },
    { path: 'registration-details/:id', component:RegistrationDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
