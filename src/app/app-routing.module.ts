import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './find-all/find-all.component';
import { PostFormComponent } from './post-form/post-form.component';


const routes: Routes = [{
  path : 'find-all',
  component : FindAllComponent
},{
  path : 'post-form',
  component : PostFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }
