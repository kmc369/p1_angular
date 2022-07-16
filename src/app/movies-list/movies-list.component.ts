import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  service :MovieServiceService;
  searchbyId :number;
  movies : any;
  constructor(service :MovieServiceService) { 
    this.searchbyId=0;
    this.service = service;
  }
    ngOnInit(): void {
       
       
    }

    onChange() :void{
      this.service.findbyId(this.searchbyId).subscribe(data =>{
        this.movies=data;
      });
    }

}
