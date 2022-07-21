import { Component, OnInit } from '@angular/core';
import { movies } from '../find-all/models/movies';
import { MovieServiceService } from '../movie-service.service';
import { observable ,Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remake',
  templateUrl: './remake.component.html',
  styleUrls: ['./remake.component.css']
})
export class RemakeComponent implements OnInit {
  
  movieRemake :movies= new movies();                  //movieRemake :movies = new movies();
  service :MovieServiceService;
  

  

  constructor(service :MovieServiceService) {
    this.service = service;
    
   }


 
  ngOnInit(): void {
  
  }

  remakeForm(movie:movies){
    this.service.remake(movie).subscribe(
      data => {
        console.log(data)
    
  })

  }
}
