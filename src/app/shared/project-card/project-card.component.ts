import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project: any = {};
}





















// <div class="project-card p-4">   <div class="image" style="  overflow: hidden;">     <img [src]="project.image" class="project-img" alt="{{ project.title }}" loading="lazy" />   </div>   <div class="project-info">     <h5 class="project-title">{{ project.title }}</h5>     <h4 class="project-description">{{ project.description }}</h4>   </div> </div>
