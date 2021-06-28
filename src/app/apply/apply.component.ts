import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ThankyouComponent } from '../thankyou/thankyou.component';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  // disable = true;
  // dialogRef: any;
  // @Input() jobId!: any;

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ApplyComponent>, public http: HttpClient) { }

  applied(){
    this.dialog.open(ThankyouComponent, {
      width: '35rem',
    })
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    // this.http.post
    this.http.post("http://localhost:9090/jobApply/"+localStorage.getItem("jobId"),form.value).subscribe((res)=>{
      if(res)
      {
       console.log("Job Applied Successfully");
         
      }
      else
      {
        console.log("Error in Applying Job");
      }
    });
    console.log(localStorage.getItem("jobId"));
    localStorage.removeItem("jobId");
    this.applied()
    this.dialogRef.close();
  }

  // validOrNot(event: Event){
  //   this.disable = true;
  //   if((<HTMLInputElement>event.target).value.length === 10 && (<HTMLInputElement>event.target).value.match(/^[0-9]+$/) != null){
  //     this.disable = false;
  //   }
  // }

  ngOnInit(): void {
  }

}