import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @Input answer1:any;
  constructor() {
    console.log(this.answer1);
  }

  ngOnInit() {
  }

}
