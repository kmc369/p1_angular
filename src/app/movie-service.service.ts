import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import { movies } from './find-all/models/movies';
import { observable, Subject } from 'rxjs';
import { RemakeComponent } from './remake/remake.component';
import { PostFormComponent } from './post-form/post-form.component';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

http :HttpClient;





constructor(http :HttpClient) { 
  this.http = http;
 
  } 

  private _refreshRequired = new Subject<void>();

  get refreshRequired() {
    return this._refreshRequired  
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

  DeleteById(id :number){
      return this.http.delete(environment.deleteurl + id)
  }

  remake(movie:movies){
    return this.http.put(environment.remakeurl,movie).pipe(
      tap(()=> {
        this.refreshRequired.next();
         catchError(this.handleError)
      }));
    }
    }
  