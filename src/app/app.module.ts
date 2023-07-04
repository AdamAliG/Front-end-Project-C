import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GallerylineComponent } from './home/gallery/galleryline/galleryline.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    FooterComponent,
    HeroComponent,
    TestimonialsComponent,
    AboutMeComponent,
    NavbarComponent,
    GallerylineComponent,
    ContactMeComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
