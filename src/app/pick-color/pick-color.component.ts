import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.scss']
})
export class PickColorComponent implements OnInit {
  background = '#00E067';
  // tslint:disable-next-line:typedef
  onChange(value) {
    this.background = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
