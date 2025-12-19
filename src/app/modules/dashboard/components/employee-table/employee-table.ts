import { Component, Input, OnInit } from '@angular/core';
import { MockData } from '../../../../shared/services/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.scss',
})
export class EmployeeTable implements OnInit {
   @Input() mode: 'employee' | 'attendance' = 'employee';
 employees :any = [];
  filteredEmployees :any = [];

  constructor(private mockData: MockData) {}

  ngOnInit() {
    this.employees = this.mockData.getEmployees();
    this.filteredEmployees = this.employees;

    this.mockData.search$.subscribe(search => {
      this.filteredEmployees = this.employees.filter((emp: { name: string; role: string; }) =>
        emp.name.toLowerCase().includes(search) ||
        emp.role.toLowerCase().includes(search)
      );
    });
  }
  // employee-table.component.ts
onSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.mockData.updateSearch(value);
}

}
