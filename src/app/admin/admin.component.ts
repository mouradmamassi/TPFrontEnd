import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


export class RouteAdmin{
  routeName:string;
  linkName:string;

  constructor(linkName, routeName){
    this.linkName = linkName;
    this.routeName = routeName;
  }
}

@Component({
  selector: 'app-admin',
  animations: [
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  routesAdmin: RouteAdmin[] = [
    new RouteAdmin("/admin/gestion_utilisateurs", "Gestion des Utilisateurs"),
    new RouteAdmin("/admin/gestion_annonces", "Gestion des Annonces"),
    new RouteAdmin("/admin/gestion_emprunts", "Gestion des Emprunts"),
  ]
  showSideNav:boolean = false;
  title:string = "Médiathèque";
  opened: boolean;
  constructor(
    router: Router,
  ){

  }
  ngOnInit() {
  }

}
