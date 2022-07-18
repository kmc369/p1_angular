import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movies } from './find-all/models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

http :HttpClient;

constructor(http :HttpClient) { 
  this.http = http;
 
  } 

 
  findbyId(id :number) :Observable<any>{
    return this.http.get(environment.apiurl + id);
  }

  findAll() :Observable <any>{
    return this.http.get(environment.findurl);
  }

  update(movie :movies) {
    return this.http.post(environment.posturl,movie).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError(()=>{
      throw new Error();
    })
  }
}
