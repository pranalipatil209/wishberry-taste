import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {QuestionnaireComponent} from './questionnaire/questionnaire.component';
import { BarchartComponent } from './barchart/barchart.component';

const appRoutes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'test', component: QuestionnaireComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        QuestionnaireComponent,
        BarchartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ChartsModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
