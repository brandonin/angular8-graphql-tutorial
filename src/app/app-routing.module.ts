import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component'
import { ExchangeratesComponent } from './exchangerates/exchangerates.component'

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'exchangerates',
    component: ExchangeratesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
