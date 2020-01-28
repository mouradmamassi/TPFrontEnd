import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-mediatheque-pagination',
  templateUrl: './mediatheque-pagination.component.html',
  styleUrls: ['./mediatheque-pagination.component.css']
})
export class MediathequePaginationComponent implements OnInit {

  @Input() pagedList = [];
  @Input() pageSize;  //displaying nine cards each row
  @Input() productsList = [];
  @Input() breakpoint;  //to adjust to screen
  @Output() pagedListEvent = new EventEmitter<any>();
  @Output() breakpointEvent = new EventEmitter<any>();


  // code copied from this source here https://stackoverflow.com/questions/50810413/how-to-use-angular-material-pagination-with-mat-card
 
  
  // MatPaginator Inputs
  length: number = 0;
 
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    // console.log(this.pagedList);
    this.length = this.productsList.length;
  }
  
  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
   
    this.pagedList = this.productsList.slice(startIndex, endIndex);
    this.pagedListEvent.emit(this.pagedList);
    // console.log(this.pagedList);
  }

  onResize(event) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
    this.breakpointEvent.emit(this.breakpoint);
  }

  

}
