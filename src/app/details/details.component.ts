import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyComponent } from '../apply/apply.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // jobIdTemp:string = '0000';
  // @Output() getJobId = new EventEmitter<{newJobId: string}>();
  heading: string = 'UI/ UX developer'
  id = this.route.snapshot.params['id']
  constructor(public dialog: MatDialog,private route:ActivatedRoute,private http:HttpClient) {}
  data:any
  applyNow(){
    this.dialog.open(ApplyComponent, {
      width: '350px',
    })
    // console.log(this.jobIdTemp)
    // this.getJobId.emit({newJobId: this.jobIdTemp})
  }

  ngOnInit(): void {
    localStorage.setItem("jobId",this.id);
     this.http.get("http://localhost:9090/"+this.id).subscribe(res=>{this.data=res})
  }

}