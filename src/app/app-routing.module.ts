import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionUtilisateursComponent } from './admin/gestion-utilisateurs/gestion-utilisateurs.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTableComponent } from './admin/admin-table/admin-table.component';
import { MediathequeComponent } from './mediatheque/mediatheque/mediatheque.component';
import { AnnoncesComponent } from './mediatheque/annonces/annonces.component';
import { AccueilComponent } from './mediatheque/accueil/accueil.component';
import { EncartsPressesComponent } from './mediatheque/encarts-presses/encarts-presses.component';


const routes: Routes = [
  {
    path: "", component : MediathequeComponent, children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'annonces', component: AnnoncesComponent },
      { path: 'encarts_presses', component: EncartsPressesComponent },
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
        { path: 'gestion_utilisateurs', component: GestionUtilisateursComponent },
        {
          path: "table", component : AdminTableComponent
        },
    ]
  },
 

  //A supprimer
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
