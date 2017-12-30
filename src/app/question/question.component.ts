import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from './question';
import { ResultsService } from '../results.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question:Question;
  markedOptions:Map<number,number>;
  constructor(private questionService:QuestionService, private resultsService:ResultsService) { }

  ngOnInit() {
    this.question=this.questionService.next();
    this.markedOptions = new Map<number,number>();
  }

  next(){
    this.question=this.questionService.next();
  }

  prev(){
    this.question=this.questionService.prev();
  }

  mark(selectedOption:number){
    if(selectedOption > -1){
      this.resultsService.markOption(this.question.id,selectedOption);
      this.markedOptions.set(this.question.id,selectedOption);
      }
  }
}
