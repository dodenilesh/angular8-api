import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';

const routes: Routes = [
  { path:'', redirectTo:'employee', pathMatch: 'full' },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'employees', component: EmployeesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }