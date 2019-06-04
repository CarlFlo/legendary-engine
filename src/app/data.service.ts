import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, DataResponse } from '../app/result-list/result-list.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  api = "http://localhost:3000/api/felaktigt/0/50/";
  pageNumberSubject = new Subject<number>();

  getPageNumberObservable(){
    return this.pageNumberSubject.asObservable();
  }

  getItems() {
    return this.http.get<DataResponse>(this.api);
  }

  nextPageClick(){
    if(this.api !== "http://localhost:3000/api/avvikande/0/50/"){
      var splitted = this.api.split("/");
      var numbersplit = +splitted[5] +1;
      this.pageNumberSubject.next(numbersplit);
      splitted[5] = ""+numbersplit;
      this.api = splitted.join("/");
    }
  }
  
  previousPageClick(){
    var splitted = this.api.split("/");
    var numbersplit = +splitted[5] -1;
    if(numbersplit > -1){
      this.pageNumberSubject.next(numbersplit);
      splitted[5] = ""+numbersplit;
      this.api = splitted.join("/");
    }
  }

  felaktigClick() {
    this.api = "http://localhost:3000/api/felaktigt/0/50/";
  }
  mestadelsfelaktigClick() {
    this.api = "http://localhost:3000/api/mestadels_felaktiga/0/50/";
  }
  avvikandeClick() {
    this.api = "http://localhost:3000/api/avvikande/0/50/";
  }
}
