import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/classes/annonce';
import { PageEvent } from '@angular/material';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonces: Annonce[]=[
    new Annonce(1,
      "Jour de fermeture1", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture2", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture3", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture4", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture5", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture6", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture7", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
    new Annonce(1,
      "Jour de fermeture8", 
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
      + "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
      new Date()
    ),
  ]

  pageSize: number = 9;
  pagedList = [];
  breakpoint = 3;
  constructor() { }

  ngOnInit() {
    this.pagedList = this.annonces.slice(0, this.pageSize);
  }
  
  onChangePagedList(pagedList){
    this.pagedList = pagedList;
  }
  onResize(breakpoint){
    this.breakpoint = breakpoint;
  }

}
