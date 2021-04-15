import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-function',
  templateUrl: './arrow-function.component.html',
  styleUrls: ['./arrow-function.component.css'],
})
export class ArrowFunctionComponent implements OnInit {
  constructor() {
    // Use arrow func for Arrays
    // let smartPhones = [
    //   { name: 'iphone', price: 649 },
    //   { name: 'Galaxy S6', price: 576 },
    //   { name: 'Galaxy Note 5', price: 489 },
    // ];
    //Normal
    // console.log(
    //   smartPhones.map(function (phone) {
    //     return phone.price * 2;
    //   })
    // );
    // Arrow
    // console.log(smartPhones.map((phone) => phone.price * 2));
    // Use this keyword in Arrow Function
    // let me = {
    //   name: "Ashutosh Verma",
    //   thisInArrow:(name: any) => {
    //   console.log("My name is " + this.name); // no 'this' binding here
    //   },
    //   thisInRegular(){
    //   console.log("My name is " + this.name); // 'this' binding works here
    //   }
    // };
  }

  ngOnInit(): void {}

  techArrow(params) {
    return params + 10;
  }
  //
  techArrow1 = (params) => params + 10;

  // not params, () is required
  techArrow2 = function TechArrow() {
    //
  };

  techArrow3 = () => console.log('a');

  // Object literal
  object1 = function ObjectFun(id, name) {
    return {
      id: id,
      name: name,
    };
  };
  // =>
  object2 = (id, name) => ({ id: id, name: name });
}
