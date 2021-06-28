import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-secondform',
  templateUrl: './secondform.component.html',
  styleUrls: ['./secondform.component.css']
})
export class SecondformComponent implements OnInit {

  @ViewChild('secondForm') secondForm!: NgForm;
  constructor(private router:Router) { }
 secondform!:SecondForm;
 skills = [
  { id:1,name: 'Computer/Laptop',checked:false },
  { id:2,name: 'Wifi/Interner',checked:false },
  { id:3,name: 'Java' ,checked:false},
  { id:4,name: 'C' ,checked:false},
  { id:5,name: 'C++' ,checked:false},
  { id:6,name: 'Python' ,checked:false},
  { id:7,name: 'HTML',checked:false },
  { id:8,name: 'CSS'  ,checked:false},
  { id:9,name: 'JavaScript' ,checked:false},
  { id:10,name: 'JQuery' ,checked:false},
  { id:11,name: 'React' ,checked:false},
  { id:12,name: 'Angular' ,checked:false},
  { id:11,name: 'NodeJS' ,checked:false},
  { id:12,name: 'Bootstrapa' ,checked:false},
  { id:13,name: 'AJAX' ,checked:false},
  { id:14,name: 'WordPress' ,checked:false},
  { id:15,name: 'SQL' ,checked:false},
  { id:16,name: 'PHP' ,checked:false},
  { id:17,name: 'Web Designing',checked:false }
];

selectedItemsList=[{}];
checkedIDs=[0];
skillsname=[''];

  ngOnInit(): void {
    this.secondform={
         
  englishRequired:'',
  deposit:'',
  jobDescription:'',
 
    }

    this.fetchSelectedItems()
    this.fetchCheckedIDs()
    
  }
  changeSelection():void{
    this.fetchSelectedItems()
  }
  fetchSelectedItems() :void{
    this.selectedItemsList = this.skills.filter((value,index) => {
      return value.checked
      
    });
    this.skillsname=[];
      this.selectedItemsList.forEach((value: any,index: any) => {
        if (value.checked) {
          this.skillsname.push(value.name);
        }
      });
  }
  fetchCheckedIDs():void {
    this.checkedIDs=[];
    this.skills.forEach((value,index) => {
      if (value.checked) {
        this.checkedIDs.push(value.id);
      }
    });
  
  }
  firstform():void{
    this.router.navigate(["firstform"]);
  }
 
  thirdform():void{
    var userobj2={
      englishRequired:this.secondform.englishRequired,
      skills:this.skillsname,
      jobDescription:this.secondform.jobDescription,
      deposit:this.secondform.deposit
    };
    
      localStorage.setItem('userData2',JSON.stringify(userobj2));
      this.router.navigate(["thirdform"]);
  }

}

export class SecondForm{
  englishRequired!:string;
  deposit!:string;
  jobDescription!:string;
  
}
