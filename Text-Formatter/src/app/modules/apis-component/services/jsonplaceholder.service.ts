import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUserInfo(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}`)
    .pipe(catchError(this.handleError));
  }

  getUserPhotos(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/photos?userId=${userId}`)
    .pipe(catchError(this.handleError));
  }

  getUserAlbums(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/albums?userId=${userId}`)
    .pipe(catchError(this.handleError));
  }

  getTodos(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/todo?userId=${userId}`)
    .pipe(catchError(this.handleError));
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, data)
    .pipe(catchError(this.handleError));
  }

  updateUser(userId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, data)
    .pipe(catchError(this.handleError));
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
