import { Component, OnInit } from '@angular/core';
import { movies } from '../find-all/models/movies';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-remake',
  templateUrl: './remake.component.html',
  styleUrls: ['./remake.component.css']
})
export class RemakeComponent implements OnInit {
  
  movieRemake :movies;
  service :MovieServiceService;
  constructor(service :MovieServiceService) {
    this.service = service;
    this.movieRemake = new movies();
   }

  ngOnInit(): void {
  }

  remake(movie:movies){
    this.service.remake(this.movieRemake).subscribe(
      data => console.log('success',data));
    
  }

}
