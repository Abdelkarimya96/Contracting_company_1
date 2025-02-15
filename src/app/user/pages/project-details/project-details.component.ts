import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectsArrayService } from '../../../Services/projects-array.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  project: any = null;
  projectImages: string[] = [];
  private projects: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsArrayService: ProjectsArrayService
  ) {}

  ngOnInit(): void {
    console.log('Navigated to project ID:', this.activatedRoute.snapshot.paramMap.get('id'));
    console.log('ProjectDetailsComponent initialized');

    // Fetch projects only once
    this.projects = this.projectsArrayService.getProjects();

    this.activatedRoute.paramMap.subscribe(params => {
      const projectId = Number(params.get('id'));
      if (projectId) {
        this.getProjectDetails(projectId);
      } else {
        console.error(`Invalid project ID: ${params.get('id')}`);
      }
    });
  }

  private getProjectDetails(id: number): void {
    if (!this.projects.length) {
      console.warn('Projects list is empty, fetching data again...');
      this.projects = this.projectsArrayService.getProjects();
    }

    this.project = this.projects.find(proj => proj.id === id) || null;

    if (this.project) {
      this.projectImages = this.project.images || [];
    } else {
      console.warn(`Project with ID ${id} not found.`);
      this.projectImages = [];
    }
  }

}
