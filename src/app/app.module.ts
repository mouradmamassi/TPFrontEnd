import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    //material angular Module and flex layout
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorIntl } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionUtilisateursComponent } from './admin/gestion-utilisateurs/gestion-utilisateurs.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTableComponent, AdminTableDeleteDialog, AlertTableModificationComponent } from './admin/admin-table/admin-table.component';
import { AdminDialogComponent } from './admin/admin-dialog/admin-dialog.component';
import { MatPaginatorIntlCustom } from './admin/admin-table/admin-table-pagination';
import { GestionAnnoncesComponent } from './admin/gestion-annonces/gestion-annonces.component';
import { GestionStockComponent } from './admin/gestion-stock/gestion-stock.component';
import { GestionEmpruntsComponent } from './admin/gestion-emprunts/gestion-emprunts.component';
import { MediathequeComponent } from './mediatheque/mediatheque/mediatheque.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './mediatheque/accueil/accueil.component';
import { AnnoncesComponent } from './mediatheque/annonces/annonces.component';
import { EncartsPressesComponent } from './mediatheque/encarts-presses/encarts-presses.component';
import { MediathequePaginationComponent } from './mediatheque/mediatheque-pagination/mediatheque-pagination.component';
import { UserComponent } from './user/user/user.component';
import { ConnexionComponent } from './mediatheque/connexion/connexion.component';



@NgModule({
  declarations: [
    AppComponent,
    GestionUtilisateursComponent,
    AdminComponent,
    AdminTableComponent,
    AdminTableDeleteDialog,
    AdminDialogComponent,
    AlertTableModificationComponent,
    GestionAnnoncesComponent,
    GestionStockComponent,
    GestionEmpruntsComponent,
    MediathequeComponent,
    MenuComponent,
    AccueilComponent,
    AnnoncesComponent,
    EncartsPressesComponent,
    MediathequePaginationComponent,
    UserComponent,
    ConnexionComponent,

  ],
  entryComponents: [
    AdminTableDeleteDialog,
    AlertTableModificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //material angular Module and flex layout
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,

  
    
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCustom}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
