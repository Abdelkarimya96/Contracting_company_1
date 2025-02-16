import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { InfoService } from '../../Services/info.service';


import { faPhone, faEnvelope, faBars, faX} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faTwitter, faPinterest, faBehance, faTiktok, faSnapchat } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    CarouselComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faPinterest = faPinterest;
  faBehance = faBehance;
  faTiktok = faTiktok;
  faSnapchat = faSnapchat;
  faBars = faBars;
  faX = faX;

  isNavbarOpen: boolean = false;
  contactInfo: any;
  socialLinks: any;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    const data = this.infoService.getInfo();
    this.contactInfo = data.contact_info;
    this.socialLinks = data.social_links;
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
