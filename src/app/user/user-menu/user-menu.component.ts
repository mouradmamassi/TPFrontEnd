import { Component, OnInit } from '@angular/core';
import { RoutesApp } from 'src/app/app.component';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  opened: boolean = true;
  routesApp: RoutesApp[] = [
    new RoutesApp("emprunts", "Les emprunts"),
    new RoutesApp("profile", "Profile"),
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
