import { Component, OnInit } from '@angular/core';
import { ProjectsArrayService } from '../../../Services/projects-array.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: any [] = [];
  constructor(
    private projectsArrayService: ProjectsArrayService
  ) {}
ngOnInit(): void {
  let projects = this.projectsArrayService.getProjects();
  this.projects = projects || [];
  console.log(this.projects);
}
}
