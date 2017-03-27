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
    constructor(fb: FormBuilder) {
        this.QForm = fb.group({})
    }

    ngOnInit() {
    }

    submitForm(value: any): void{
        console.log('val ',value);
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
        console.log('unchecked ',this.unchecked);
        if(this.count == 10) {
            for (let key in value) {
                if (this.questionData[key].answer == value[key]) {
                    this.given.correct++;
                    console.log('correct ',value[key]);
                }
                else {
                    this.given.incorrect++;
                    console.log('incorrect ',value[key]);
                }
            }
            this.pass = this.given;
        }
        console.log(this.unchecked,this.given.correct,this.given.incorrect);
    }

    formReset(){
        this.unchecked = [];
        this.given.correct = 0;
        this.given.incorrect = 0;
        this.count = 0;
        this.pass = null;
    }

}
