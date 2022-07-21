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
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import { RemakeComponent } from './remake/remake.component';



import {AccordionModule} from 'primeng/accordion';    
import {TableModule} from 'primeng/table';
import {InputNumberModule} from 'primeng/inputnumber';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    FindAllComponent,
    PostFormComponent,
    DeleteByIdComponent,
    RemakeComponent,
    TestComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AccordionModule,
   InputNumberModule,
   TableModule,
   MenuModule,
   InputTextModule,
   ButtonModule,


  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
