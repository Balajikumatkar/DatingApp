import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  value: any;
  constructor(private http: HttpClient) { }

    ngOnInit() {
    this.getValues();
  }
 public getValues(): void {
    this.http.get('http://localhost:5000/api/values').subscribe(responce => {
    this.value = responce;
  },
  error => {
     console.log(error);
    });
  }

}
