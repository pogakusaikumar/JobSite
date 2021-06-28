import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent implements OnInit {

  @ViewChild('contactForm') firstForm!: NgForm;
  constructor(private router:Router,private http:HttpClient) {
  } 

  firstform!:Firstform;
  
  
    ngOnInit(): void {
    this.firstform= {
    jobRole:"",
   jobTitle:"",
  workFromHome:false,
  jobType:"",
  shift:"",
  maxSalary:NaN,
  minSalary:NaN,
  minEducation:"",
  workingDays:"",
  workTimings:"",
  openings:NaN,
  gender:"",
  experience:"",
    };
  }
  
  second(){

    var userobj={jobRole:this.firstform.jobRole,jobTitle:this.firstform.jobTitle,
      workFromHome:this.firstform.workFromHome,
      jobType:this.firstform.jobType,
      shift:this.firstform.shift,
      maxSalary:this.firstform.maxSalary,
      minSalary:this.firstform.minSalary,
      minEducation:this.firstform.minEducation,
      gender:this.firstform.gender,
      experience:this.firstform.experience,
      workingDays:this.firstform.workingDays,
      workTimings:this.firstform.workTimings,
      openings:this.firstform.openings};
      localStorage.setItem('userData',JSON.stringify(userobj));
    this.router.navigate(["secondform"]);
  }

}

export class Firstform{
  jobRole!:string;
  jobTitle!:string;
  workFromHome!:boolean;
  jobType!:string;
  shift!:string;
  maxSalary!:number;
  minSalary!:number;
  minEducation!:string;
  workingDays!:string;
  workTimings!:string;
  openings!:number;
  gender!:string;
  experience!:string;
   
  }
