import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Country, State, City }  from 'country-state-city';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-thirdform',
  templateUrl: './thirdform.component.html',
  styleUrls: ['./thirdform.component.css']
})
export class ThirdformComponent implements OnInit {
 
  @ViewChild('thirdForm') thirdForm!: NgForm;
  constructor(private router:Router,private http: HttpClient) { }
 
  thirdform!:ThirdForm;
  
cityVal='';
areaVal='';
requiredSkills:string="";

 jobRole='';
  ngOnInit(): void {
   this.thirdform ={
    companyName:'',
    buildingName:'',
    contactEmail:'',
    hRwhatsappNumber:NaN,
    recruitersName:'',
    cities:State.getStatesOfCountry("IN"),
    areas:[]
   }
  }
  
  secondform(){
    this.router.navigate(["secondform"]);
  }
  update(e:any)
  {
    this.cityVal=e.target.value;
    this.thirdform.areas=City.getCitiesOfState("IN",this.cityVal);
    
    
  }
  updateCity(e:any)
  {
    this.areaVal=e.target.value;
  }
  submit()
  {
  
    
    
    var userobj=localStorage.getItem("userData");
    var userobj1:any;

    if(userobj){
    userobj1=JSON.parse(userobj);

    console.log(userobj1);
    var jobRole=userobj1.jobRole;
    var jobTitle=userobj1.jobTitle;
    var type=userobj1.jobType;
    var shift=userobj1.shift;
    var gender=userobj1.gender;
    var experience=userobj1.experience;
    var minSalary=userobj1.minSalary;
    var maxSalRY=userobj1.maxSalary;
    var minEducation=userobj1.minEducation;
    var workFromHome=userobj1.workFromHome;
    var workingDays=userobj1.workingDays;
    var workTimings=userobj1.workTimings;
    var openings=userobj1.openings;
    var jobTitle=userobj1.jobTitle;
    

    }
    userobj=(localStorage.getItem("userData2"));
    userobj1=[];
    if(userobj){
    userobj1=JSON.parse(userobj);
    
    console.log(userobj1);
    var skills=userobj1.skills;
    var englishRequired=userobj1.englishRequired;
    var securityDepositCharged=userobj1.deposit;
    var jobDescription=userobj1.jobDescription;
  
   
    for(var value of skills)
    {
      this.requiredSkills=this.requiredSkills+value+" ";
    }
   
 console.log(this.requiredSkills);
    
    console.log(typeof(this.thirdform.hRwhatsappNumber),this.thirdform.hRwhatsappNumber);
    }
    
    
      this.http.post("http://localhost:9090/addJob",{
      "jobTitle": jobTitle,
      "area": this.areaVal,
      "buildingName" : this.thirdform.buildingName,
      "city":this.cityVal,
      "companyName": this.thirdform.companyName,
      "contactEmail": this.thirdform.contactEmail,
      "english": englishRequired,
      "experience": experience,
      "gender": gender,
      "hRwhatsappNumber": this.thirdform.hRwhatsappNumber,
      "jobDescription": jobDescription,
      "jobRole": jobRole,
      "maxSalRY": maxSalRY,
      "minEducation": minEducation,
      "minSalary": minSalary,
      "openings": openings,
      "recieveApplicationsFrom": "EntireCity",
      "recruitersName": this.thirdform.recruitersName,
      "requiredSkills": this.requiredSkills,
      "securityDepositCharged": securityDepositCharged,
      "shift": shift,
      "type":type,
      "workFromHome":workFromHome,
      "workTimings": workTimings,
      "workingDays": workingDays
    }).subscribe((res)=>{
      if(res)
      {
       alert("Job Posted Successfully");
         
      }
      else
      {
        alert("Error in Posting Job");
      }
    });
  }

}

export class ThirdForm{
  companyName!:string;
  buildingName!:string;
  contactEmail!:string;
  hRwhatsappNumber!:number;
  recruitersName!:string;
  cities:any;
 areas:any;
}

