import { Component, OnInit } from '@angular/core';
import { ServicesArrayService } from '../../../Services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  services: any[] = []
  constructor(
    private servicesArrayService : ServicesArrayService
  ){};
  ngOnInit(): void {
  this.services = this.servicesArrayService.getServices() || [];
  console.log(this.services);
}
}
