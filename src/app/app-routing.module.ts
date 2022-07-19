import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './find-all/find-all.component';

const routes: Routes = [{

  path : 'find-all',
  component : FindAllComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }
