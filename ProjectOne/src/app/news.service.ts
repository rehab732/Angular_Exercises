import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient) {}

  getAllNews():Observable<any>
  {
    return this._HttpClient.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=b91b1ad18ae4406c91691c7760a602e5");
  }
}
