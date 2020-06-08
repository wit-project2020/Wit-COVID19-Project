import { HomeAreaComponent } from './home-area/home-area.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'frontPage-component',component:FrontPageComponent},
  {
   path:'homeArea-component',component:HomeAreaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
