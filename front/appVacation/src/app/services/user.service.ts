import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee';
import {CoreService} from "./core.service";

@Injectable()
export class UserService extends CoreService {

    constructor(private http: HttpClient) {
      super();
    }

    getAll() {
        return this.http.get<Employee[]>(this.uri + 'users/', this.httpOptions);
    }

    getById(id: number) {
        return this.http.get(this.uri + 'users/' + id, this.httpOptions);
    }

    create(employee: Employee) {
        return this.http.post(this.uri + 'users/', employee, this.httpOptions);
    }

    update(employee: Employee) {
        return this.http.put(this.uri + 'users/' + employee.id, employee, this.httpOptions);
    }

    delete(id: number) {
        return this.http.delete(this.uri + 'users/' + id, this.httpOptions);
    }
}
