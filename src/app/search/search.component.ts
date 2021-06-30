import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApplyComponent } from '../apply/apply.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  viewMode='';
  title = 'JobSite';
  jobType:string="";
  location:string="";
  jobTypes:string[]=["web-development","full-stack-development","front-end-dev","back-end-dev","data-science"]
  locations:string[]=["Banglore","Hyderabad","Mumbai","Chennai","Pune"]
  jobs:any
  breakpoint!:number
  ratio!:string
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  freetext:string=""
  obj:any
  // Pagination parameters.
  p: number = 1;
  count: number = 2;
  constructor(private http:HttpClient,private router:Router)
  {
  }
  ngOnInit() {
    if(window.innerWidth <= 900)
    {
      this.breakpoint=1
      this.ratio="240px"
    }
    else{
      this.breakpoint=2
      this.ratio="200px"
    }
} 
  onResize(event:any)
  {
    if(event.target.innerWidth <= 900)
    {
      this.breakpoint=1
      this.ratio="240px"
    }
    else{
      this.breakpoint=2
      this.ratio="200px"
    }
  }
  /*getAllJobs()
  {
    this.http.get("http://localhost:9090/elasticData",{ 'headers': this.headers }).subscribe(res=>{
      this.jobs=res
    })
    return this.jobs
  }*/
  postjob()
  {
    this.router.navigate(["firstform"]);
  }
  freeTextSearch()
  {
    this.http.get("http://localhost:9090/freeTextSearch/"+this.freetext,{ 'headers': this.headers }).subscribe(response=>{this.obj=response})
  }
  apply(id:string)
  {
    this.router.navigate([id])
  }
  getJobs(filter:string)
  {
    if(this.freetext=="")
    {
      if(this.jobType!=""&&this.location!=""){
    switch(filter)
    {
      case "All": this.p=1
                  this.http.get("http://localhost:9090/findBy/"+this.jobType+"/"+this.location,{ 'headers': this.headers }).subscribe(response=>{this.jobs=response})
                  break
      case "Work from home":this.p=1
                            this.http.get("http://localhost:9090/filter/findByWorkFromHome/"+this.jobType+"/"+this.location+"/true",{ 'headers': this.headers }).subscribe(response=>{this.jobs=response})
                            break
      case "Part time":  this.p=1
                         this.http.get("http://localhost:9090/findByPartTime/"+this.jobType+"/"+this.location+"/Part Time",{ 'headers': this.headers }).subscribe(response=>{this.jobs=response})
                         break
      case "Night shift": this.p=1
                          this.http.get("http://localhost:9090/findByShift/"+this.jobType+"/"+this.location+"/Night",{ 'headers': this.headers }).subscribe(response=>{this.jobs= response})
                          break
      case "Jobs for women":this.p=1
                            this.http.get("http://localhost:9090/findByGender/"+this.jobType+"/"+this.location+"/female",{ 'headers': this.headers }).subscribe(response=>{this.jobs= response})
                           break
      case "Jobs for freshers":this.p=1
                              this.http.get("http://localhost:9090/findByExperience/"+this.jobType+"/"+this.location+"/fresher",{ 'headers': this.headers }).subscribe(response=>{this.jobs=response})
                              break
    }
  }
  }
  }
  /*loopJobs()
  {
    if(this.freetext!="")
    {
      let l:any
      switch(this.viewMode)
    {
      case "All": l=this.obj;this.p=1;
                  break
      case "Work from home":for(let x of this.obj)
                            {
                              if(x.workFromHome)
                              {
                                l.push(x)
                              }
                            }
                            this.p=1;
                            break
      case "Part time":for(let x of this.obj)
      {
        if(x.type.toLocaleLowerCase().includes("parttime"))
        {
          l.push(x)
        }
      }
      this.p=1
      break
      case "Night shift":for(let x of this.obj)
      {
        if(x.shift.toLocaleLowerCase().includes("night"))
        {
          l.push(x)
        }
      }
      this.p=1
      break
      case "Jobs for women":for(let x of this.obj)
      {
        if(x.gender.toLocaleLowerCase().includes("female"))
        {
          l.push(x)
        }
      }
      this.p=1
      break
      case "Jobs for freshers":for(let x of this.obj)
      {
        if(x.experience.toLocaleLowerCase().includes("fresher"))
        {
          l.push(x)
        }
      }
      this.p=1
      break
    }
      return l;
    }
     return this.jobs
  }*/
  filters(x:any)
  {
    let f=[]
    if(x.workFromHome)
    {
      f.push("WorkFromHome");
    }
    if((<string>x.shift).toLocaleLowerCase()=="night shift")
    {
      f.push("Night Shift");
    }
    if((<string>x.type).toLocaleLowerCase()=="part time")
    {
      f.push("Part Time");
    }
    if((<string>x.experience).toLocaleLowerCase()=="fresher")
    {
      f.push("Jobs for freshers");
    }
    if((<string>x.gender).toLocaleLowerCase()=="female")
    {
      f.push("Jobs for women");
    }
    return f;
  }
}