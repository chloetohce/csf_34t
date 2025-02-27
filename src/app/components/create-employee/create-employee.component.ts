import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  form: FormGroup;

  isFormDisplayed: boolean;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) {
    this.form = this.createForm();
    this.isFormDisplayed = false;
  }

  protected toggleForm() {
    this.isFormDisplayed = !this.isFormDisplayed;
  }

  protected processForm() {
    let newEmployee: Employee = this.form.value
    console.log(newEmployee);
    this.employeeService.create(newEmployee)
      .subscribe((data) => console.log(data))
  }

  private createForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control<string>(''),
      lastName: this.fb.control<string>(''),
      emailId: this.fb.control<string>(''),
    })
  }
}
