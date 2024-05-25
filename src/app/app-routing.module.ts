import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { TeamsComponent } from './teams/teams.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'employees', component: EmployeesComponent },
  {path:'courses', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
