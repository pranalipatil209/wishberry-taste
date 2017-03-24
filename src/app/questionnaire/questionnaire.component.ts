import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { data } from "../data";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  QForm : FormGroup;
  questionData = data;
  constructor(fb : FormBuilder) {
    this.QForm = fb.group({

    })
  }

  ngOnInit() {
  }

  submitForm(value:any):void{
    console.log(value);
  }

}
