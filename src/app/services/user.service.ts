import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.apiUrl);
  }

  addUser(user:any) {
    return this.http.post<any>(this.apiUrl, user);
  }

  getLastUser() {
    return this.http.get<any>(`${this.apiUrl}`);
  }

}
