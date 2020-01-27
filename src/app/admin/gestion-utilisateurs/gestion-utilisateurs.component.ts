import { Component, OnInit } from '@angular/core';

export class UserRole{
  id: number;
  nomRole: string;
  constructor(id, nomRole){
    this.id = id;
    this.nomRole = nomRole;
  }
}

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {

  userRoles:UserRole[] = [
    new UserRole(1, "admin"),
    new UserRole(2, "user"),
  ]
  constructor(
  ) { }

  ngOnInit() {
  }

}
