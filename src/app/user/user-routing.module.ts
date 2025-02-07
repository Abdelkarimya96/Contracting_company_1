import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', redirectTo: '/', pathMatch: 'full'},
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
