import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @Input() answer:any;
  constructor() {
    console.log('answer ',this.answer);
  }

  ngOnInit() {
  }

}
