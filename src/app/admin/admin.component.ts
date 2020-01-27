import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { RoutesApp } from '../app.component';




@Component({
  selector: 'app-admin',
  animations: [
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  routesApp: RoutesApp[] = [
    new RoutesApp("/admin/gestion_utilisateurs", "Gestion des Utilisateurs"),
    new RoutesApp("/admin/gestion_annonces", "Gestion des Annonces"),
    new RoutesApp("/admin/gestion_emprunts", "Gestion des Emprunts"),
  ]
  title:string = "Admin Médiathèque";
  constructor(
    router: Router,
  ){

  }
  ngOnInit() {
  }

}
