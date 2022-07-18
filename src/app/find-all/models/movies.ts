import { FindAllComponent } from "../find-all.component";
export class movies {
    id: number;
    title: String;
    actor: String;
     genre: String;
     year: number

constructor(id=0,title = '',actor='',genre='',year=0){
    this.id =id;
    this.title=title;
    this.actor=actor;
    this.genre = genre;
    this.year=year;

 }


}