import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private customersUrl = 'http://localhost:8080/api/users';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser (customer: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  deleteUser (customer: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser (customer: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions);
  }
}
