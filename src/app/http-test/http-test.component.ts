import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData = 'hello';
  imgUrl;

  constructor(private http: HttpClient) { }

  getJSON() {
    interface ItemResponse {
      license: string;
    }
    this.http.get<ItemResponse>('assets/package.json').subscribe(data => {
      console.log(data.license);
      this.someData = data.license;
    });
  }
  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe( (data) => {
      this.imgUrl = data;
      console.log(this.imgUrl);
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
