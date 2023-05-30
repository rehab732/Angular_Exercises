import { Component } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
fromparent:string='Ra7oba from parent';
name:string="Mahmoud"
twobinding:string='';
homeUsers:User[]=[];
constructor(_x:UsersService){
  this.homeUsers  =_x.users;
}
   userName:string="Rehab Mohamed";
   age:number=23;
   price:number=100;
}
