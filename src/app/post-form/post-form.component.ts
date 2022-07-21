import { Component, OnInit } from '@angular/core';
import { movies } from '../find-all/models/movies';
import { MovieServiceService } from '../movie-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  movieform :movies;
  service :MovieServiceService;
  
  constructor(service :MovieServiceService) { 
    this.movieform = new movies();
    this.service=service;
  }

  

  ngOnInit(): void {
 
  }

  submit(movie :movies) :void{
    
    this.service.update(movie).subscribe(data => {
      console.log(data)
      
  })
}
}
