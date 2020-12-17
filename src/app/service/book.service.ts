import { Injectable } from '@angular/core';
import {Booking} from '../models/booking';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000';

  
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {

   }

   // Add book
  AddBook(data: Booking): Observable<any> {
    let API_URL = `${this.REST_API}/book`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get All Book 
  GetBook() {
    return this.httpClient.get(`${this.REST_API}/getbook`);
  }

 // Delete Book
 deleteBook(id:any): Observable<any> {
  let API_URL = `${this.REST_API}/delete/${id}`;
  return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
}
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
