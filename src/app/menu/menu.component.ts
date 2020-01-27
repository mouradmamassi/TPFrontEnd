import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesApp } from '../app.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() routesApp: RoutesApp[];
  @Input() title:string;
  opened: boolean;
  constructor(
    router: Router,
  ){
  }

  ngOnInit() {
  }

}
