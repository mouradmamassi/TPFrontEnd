import { Component } from '@angular/core';

export class RoutesApp{
  routeName:string;
  linkName:string;

  constructor(linkName, routeName){
    this.linkName = linkName;
    this.routeName = routeName;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
