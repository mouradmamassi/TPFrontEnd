import { Component, OnInit } from '@angular/core';
import { RoutesApp } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mediatheque',
  templateUrl: './mediatheque.component.html',
  styleUrls: ['./mediatheque.component.css']
})
export class MediathequeComponent implements OnInit {

  routesApp: RoutesApp[] = [
    new RoutesApp("/accueil", "Accueil"),
    new RoutesApp("/annonces", "Annonces"),
    new RoutesApp("/encarts_presses", "Encarts de presses"),
  ]
  title = "Médiathèque";
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/accueil']);
  }

}
