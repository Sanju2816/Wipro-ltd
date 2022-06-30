import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   
  a="";
  powers=['smart coder','super flexible','Logical Thinker','Excellent Analyst'];
  emp=new Employee(18,'','','');
  submitted =true;
  onSubmit(){
    this.submitted=true;
    alert("Data Submitted")
  }
  clearValue()
  {
    this.a="";
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
