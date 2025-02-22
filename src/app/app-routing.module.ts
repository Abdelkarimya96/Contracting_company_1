import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo: 'user', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)
  },
  {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
