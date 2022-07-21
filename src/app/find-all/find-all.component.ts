import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';
import { MovieServiceService } from '../movie-service.service';
import { movies } from './models/movies';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent implements OnInit {

  service :MovieServiceService;
  movies :Array<movies> = [];
 
  constructor(service :MovieServiceService) { 
  this.service = service;
  
  }

  ngOnInit(): void {
    
   
      this.service.findAll().subscribe(data => {
      this.movies = data;
    })
  }





}
