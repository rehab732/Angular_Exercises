import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit ,OnChanges{

  myarticles:any[]=[];
  @Input() x:string='';
  constructor(private _newsService:NewsService) {
    // console.log("Constructor Called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(" On changes Called");
  }
  ngOnInit(): void {
    // console.log("On Init Called ");
    this._newsService.getAllNews().subscribe(
      (data)=>{
          // console.log(data.articles);
          this.myarticles=data.articles;
      }
    );
  }

}
