import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

name:string="Mahmoud"

  users:User[]=[
    {name:"Rehab",age:23,gender:"Female"},
    {name:"7oda",age:24,gender:"Male"},
    {name:"menna",age:23,gender:"Female"},
    {name:"noor",age:23,gender:"Female"},
    {name:"rahma",age:23,gender:"Female"},
    {name:"Ahmed",age:23,gender:"Male"},

  ]


   userName:string="Rehab Mohamed";
   age:number=23;
   price:number=100;
}
