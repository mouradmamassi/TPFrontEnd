import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/classes/annonce';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  annonces: Annonce[]=[
    new Annonce(1,
      "Jour de fermeture", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
  ]
  constructor() { }

  ngOnInit() {
  }
  onResize(event) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

}
