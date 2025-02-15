import { Component, OnInit } from '@angular/core';
import { ServicesArrayService } from '../../../Services/services.service';
import { ProjectsArrayService } from '../../../Services/projects-array.service';
import { InfoService } from '../../../Services/info.service';
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
  services: any[] = [];
  projects: any[] = [];
  info: any = null;
  constructor(
    private servicesArrayService : ServicesArrayService,
    private infoService : InfoService,
    private projectService : ProjectsArrayService
  ){};
  ngOnInit(): void {
    let servicesArray = this.servicesArrayService.getServices();
    this.services = servicesArray.slice(0, 4) || [];

    let projectsArray = this.projectService.getProjects();
    this.projects = projectsArray.slice(0, 4) || [];

    this.info = this.infoService.getInfo();
}
}
