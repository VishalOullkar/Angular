import { Pipe, PipeTransform } from '@angular/core';
import { TestModel } from './test-model';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {


  //transform(items: TestModel[], searchText: string): any[] {
  //  if (!items) return [];
  //  if (!searchText) return items;
  //  searchText = searchText.toLowerCase();
  //  return items.filter(it => {
  //    return it.toLowerCase().includes(searchText);
  //  });
  //}


  transform(employees: TestModel[], searchTerm: string): TestModel[] {
    if (!employees || !searchTerm) {
      return employees;
    }

    return employees.filter(employee =>
      employee.FirstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }


}
