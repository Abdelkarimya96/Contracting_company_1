import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faFacebook, faInstagram, faWhatsapp, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { InfoService } from '../../Services/info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  info: any = null;

  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faTiktok = faTiktok;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faSnapchat = faSnapchat;
  faAngleLeft = faAngleLeft;

  constructor(
    private infoService: InfoService
  ){};
  ngOnInit(): void {
    this.info = this.infoService.getInfo();
  }
}
