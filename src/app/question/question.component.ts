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
  isFirst:boolean;
  isLast:boolean;
  constructor(private questionService:QuestionService, private resultsService:ResultsService) { }

  ngOnInit() {
    this.resultsService.reset();
    this.questionService.reset();
    this.question=this.questionService.next();
    this.markedOptions = new Map<number,number>();
    this.isFirst=true;
    this.isLast=false;
  }

  next(){
    this.question=this.questionService.next();
    this.isFirst=this.questionService.isFirst();
    this.isLast=this.questionService.isLast();

  }

  prev(){
    this.question=this.questionService.prev();
    this.isFirst=this.questionService.isFirst();
    this.isLast=this.questionService.isLast();
  }

  mark(selectedOption:number){
    if(selectedOption > -1){
      this.resultsService.markOption(this.question.id,selectedOption);
      this.markedOptions.set(this.question.id,selectedOption);
      }
  }
}
