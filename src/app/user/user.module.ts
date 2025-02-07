import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { UserRoutingModule } from './user-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { ServiceCardComponent } from '../shared/service-card/service-card.component';



@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProjectsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,

    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ServiceCardComponent
  ]
})
export class UserModule { }
