import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'employeesearch'
})
export class EmployeesearchPipe implements PipeTransform {

  transform(employees: Employee[], searchTerm?: string): Employee[] {
    if(!employees||!searchTerm)
      return employees;

    return employees.filter(e => e.FirstName.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
  }

}
