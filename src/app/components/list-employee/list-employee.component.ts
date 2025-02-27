import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {
  employees!: Employee[]

  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'actions']

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(
      (data: Employee[]) => {
        this.employees = data
        console.log(this.employees)
      }
    )
  }

  
}
