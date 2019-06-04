import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})

export class ResultListComponent implements OnInit {
  displayedColumns = [];
  items: User[] = [];
  pageNumber = 1;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPageNumberObservable().subscribe(pageNumber => this.pageNumber = pageNumber + 1);
    this.displayedColumns = ['itemId', 'link', 'byline', 'mediaLicense'];
    this.refreshList();
  }

  refreshList() {
    this.data.getItems().subscribe(data => {
      if(!data.data.length){
        return;
      }
      this.items = data.data;
      console.log(this.items);
    })
  }

  felaktigClick() {
    this.pageNumber = 1;
    this.data.felaktigClick();
    this.refreshList();
  }
  mestadelsfelaktigClick() {
    this.pageNumber = 1;
    this.data.mestadelsfelaktigClick();
    this.refreshList();
  }
  avvikandeClick() {
    this.pageNumber = 1;  
    this.data.avvikandeClick();
    this.refreshList();
  }
  nextPageClick(){
      this.data.nextPageClick();
      this.refreshList();
  }
  previousPageClick(){
    this.data.previousPageClick();
    this.refreshList();
  }

}
export type User = {
  itemId: string;
  link: string;
  byline: string;
  mediaLicense: string;
}
export type DataResponse = {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}