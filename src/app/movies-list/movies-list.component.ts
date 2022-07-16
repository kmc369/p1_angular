import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  service :MovieServiceService;
  movies :Array<any> = [];

  constructor(service :MovieServiceService) { 
    this.service = service;
  }
    ngOnInit(): void {
        this.service.findAll().subscribe(data => {
          this.movies = data;
        });
    }

}
