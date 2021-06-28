import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  time = 5    
  constructor(public dialogRef: MatDialogRef<ThankyouComponent>) { 
    let myVar = setInterval(() => {
      this.time = this.time-1; 
      // console.log(this.time)
      if(this.time === 0){
        clearInterval(myVar); 
        dialogRef.close();}}, 1000);
    
  }

  ngOnInit(): void {
  }

}