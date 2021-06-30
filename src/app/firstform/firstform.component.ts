  import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { HttpClient,HttpClientModule } from '@angular/common/http';
  import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';
  import { FormsModule } from '@angular/forms';
  
  @Component({
    selector: 'app-firstform',
    templateUrl: './firstform.component.html',
    styleUrls: ['./firstform.component.css']
  })
  export class FirstformComponent implements OnInit {
  
    @ViewChild('firstForm') firstForm!: NgForm;
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
      if(this.firstform.minSalary<this.firstform.maxSalary && 
        this.firstform.minSalary>=10000 && 
        this.firstform.openings>0) {
      var userobj={
        jobTitle:this.firstform.jobTitle,
        jobRole:this.firstform.jobRole,
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
      else if(this.firstform.minSalary<0 || this.firstform.maxSalary<0)
      {
        alert("Salary cannot be negative");
      }
      else if(this.firstform.minSalary>=this.firstform.maxSalary)
      {
        alert("Minimum salary should be less than max salary");
      }
      else if(this.firstform.minSalary<10000)
      {
        alert("Minimum salary cannot be less than 10000");
      }
      else if(this.firstform.openings<1)
      {
        alert("openings cannot be less than 1");
      }
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