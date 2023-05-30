import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:User[]=[
    {name:"Rehab",age:23,gender:"Female"},
    {name:"7oda",age:24,gender:"Male"},
    {name:"menna",age:23,gender:"Female"},
    {name:"noor",age:23,gender:"Female"},
    {name:"rahma",age:23,gender:"Female"},
    {name:"Ahmed",age:23,gender:"Male"},

  ]


  constructor() { }
}
