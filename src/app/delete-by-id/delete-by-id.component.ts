import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';



@Component({
  selector: 'app-delete-by-id',
  templateUrl: './delete-by-id.component.html',
  styleUrls: ['./delete-by-id.component.css']
})
export class DeleteByIdComponent implements OnInit {

  service :MovieServiceService;
  deleteById :number = 0;


  //event binding is performing an action on the element 
  //attribute binding is discribing how an element will look 
  
  constructor(service :MovieServiceService) { 
     this.service = service;
     

  }

  ngOnInit(): void {
   
  }

  deleteMovie(id :number){
    this.service.DeleteById(id).subscribe(data =>{
      console.log('success',data)
   })
  }

}
