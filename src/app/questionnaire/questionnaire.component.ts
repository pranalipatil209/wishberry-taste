import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {data} from "../data";
import {BarchartComponent} from "../barchart/barchart.component";

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
    QForm: FormGroup;
    questionData = data;
    unchecked: any = [];
    count = 0;
    given = {
        correct : 0,
        incorrect : 0
    };
    pass:any;
    show:boolean = false;
    constructor(fb: FormBuilder) {
        this.QForm = fb.group({})
    }

    ngOnInit() {
    }

    submitForm(value: any): void{
        for(let key in value){
            if(value[key]=="" || value[key]==null){
                this.unchecked.push(key);
                this.count--;
            }
            else{
                this.unchecked.push("");
                this.count++;
            }
        }
        if(this.count == 10) {
            for (let key in value) {
                if (this.questionData[key].answer == value[key]) {
                    this.given.correct++;
                }
                else {
                    this.given.incorrect++;
                }
            }
            this.pass = this.given;
            this.show = true;
        }
    }

    formReset(){
        this.unchecked = [];
        this.given.correct = 0;
        this.given.incorrect = 0;
        this.count = 0;
        this.pass = null;
    }

}
