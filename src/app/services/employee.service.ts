import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + "/" + id)
  }

  create(employee: Employee): Observable<Object> {
    return this.http.post<Employee>(this.baseUrl, employee)
  }

  update(employee: Employee): Observable<Object> {
    return this.http.put(this.baseUrl + "/" + employee.id, employee)
  }

  deleteById(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + id)
  }
}
