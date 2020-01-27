import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUtilisateursComponent } from './admin/gestion-utilisateurs/gestion-utilisateurs.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTableComponent } from './admin/admin-table/admin-table.component';


const routes: Routes = [
  {
    path: "admin", component : AdminComponent
  },
  {
    path: "admin/gestion_utilisateurs", component : GestionUtilisateursComponent
  },

  //A supprimer
  {
    path: "table", component : AdminTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
