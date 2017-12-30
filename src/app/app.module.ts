import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionService } from './question.service';
import { ResultsComponent } from './results/results.component';
import { ResultsService } from './results.service';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    QuestionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [QuestionService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
