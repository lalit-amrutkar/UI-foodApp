import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../enviroments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
  }



  getUserProfile(): Observable<any> {
    const url = `${this.authUrl}/user/getUser`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        console.error("Error", error);
        return throwError(() => error);
      }));
  }

  // Get all users
  getAllUsers(): Observable<any> {
    const url = `${this.authUrl}/user/getAllUser`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        console.error("Error", error);
        return throwError(() => error);
      }));
  }


}
