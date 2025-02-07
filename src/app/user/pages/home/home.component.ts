import { Component, OnInit } from '@angular/core';
import { ServicesArrayService } from '../../../Services/services-array.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  faLocationArrow = faLocationArrow;
  faEnvelope = faEnvelope;
  faClock = faClock;
  services: any[] = []
  constructor(
    private servicesArrayService : ServicesArrayService
  ){};
  ngOnInit(): void {
    let servicesArray = this.servicesArrayService.getServices();
  this.services = servicesArray.slice(0, 4) || [];
  console.log(this.services);
}
}
