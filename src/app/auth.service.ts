import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private isLoggedInStatus = false;

  setLoggedIn(value: boolean) {
    this.isLoggedInStatus = value;
  }

  get isLoggedIn() {
    return this.isLoggedInStatus;
  }

  getUserDetails(username, password) {
      // return this.http.post('/api/file.php',{
      //   username,
      //   password
      // }).subscribe(data => {
      //   console.log(data, "is what we got from the server")
      // })
      return this.http.post<myData>('/api/file.php', {
        username,
        password
      });
  }
}
