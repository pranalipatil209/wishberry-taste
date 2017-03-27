import {Component, Input} from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {
  @Input() src;

  constructor() {
  }
}
