import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUtilisateursComponent } from './admin/gestion-utilisateurs/gestion-utilisateurs.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: "admin", component : AdminComponent
  },
  {
    path: "admin/gestion_utilisateurs", component : GestionUtilisateursComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
