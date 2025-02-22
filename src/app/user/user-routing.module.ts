import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';


const routes: Routes = [
  {path: '', component: LandingComponent,
    children:[
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', redirectTo: '/user/home', pathMatch: 'full'},
      {path: 'project-details/:id', component: ProjectDetailsComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: '**', component: HomeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class UserRoutingModule { }
