import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [{
  path:"",component:HomeComponent
},{
  path:"about", component:AboutMeComponent
},{
  path:"portfolio", component:PortfolioComponent
},{
  path:"contact", component:ContactMeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
