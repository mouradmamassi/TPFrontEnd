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

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
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


  annoncesList: Annonce[]= [];
  pagedList: Annonce[]= [];
  breakpoint: number = 3;  //to adjust to screen
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 9;  //displaying three cards each row

  constructor() { }
// code source here https://stackoverflow.com/questions/50810413/how-to-use-angular-material-pagination-with-mat-card
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    this.annoncesList = this.annonces;
    this.pagedList = this.annoncesList.slice(0, this.pageSize);
    console.log(this.pagedList);
    this.length = this.annoncesList.length;
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.annoncesList.slice(startIndex, endIndex);
  }

  onResize(event) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

}
