import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  patient = {
    firstName: 'Truong',
    lastName: 'Quy',
    email: 'hongquy0802@gmail.com',
    phoneNumber: '0939271805',
    description: 'Dau hong, nhuc dau, so mui'
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.patient));
  }
}
