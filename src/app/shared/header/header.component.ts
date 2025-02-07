import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterModule } from '@angular/router';


import { faPhone, faEnvelope, faBars, faX} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faPinterest, faBehance } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    CarouselComponent,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faPinterest = faPinterest;
  faBehance = faBehance;
  faBars = faBars;
  faX = faX;

  isNavbarOpen: boolean = false;
  constructor(){}
  ngOnInit(): void {
  }
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
