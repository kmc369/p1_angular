import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FindAllComponent } from './find-all/find-all.component';
import { CommonModule } from "@angular/common";
import { PostFormComponent } from './post-form/post-form.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    FindAllComponent,
    PostFormComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
