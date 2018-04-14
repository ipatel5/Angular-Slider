import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'my-box',
  templateUrl: './mybox.component.html',
  styleUrls: ['./mybox.component.css']
})
export class MyboxComponent implements OnInit {
  min = 1;
  max = 11;
  step = 1;
  val1;
  col;

  constructor() { }

  ngOnInit() {

  }

  getdata(data) {
    this.val1 = data;
    if (this.val1 % 2 == 0) {
      this.col = "red";
    }
    else {
      this.col = "green";
    }



  }


}

