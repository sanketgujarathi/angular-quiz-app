import { Injectable } from '@angular/core';
import { Result } from './results/results';
import { QuestionService } from './question.service';

@Injectable()
export class ResultsService {
  answers:Map<number,number> = new Map([
    [1,3],
    [2,2],
    [3,3]
  ]);
  
  incorrectSubmissions:Map<string,string>;
  submittedAnswers:Map<number,number>;
  
  constructor(private questionService: QuestionService) {
    this.reset();
   }

  submit():Result{
    this.incorrectSubmissions= new Map<string,string>();
    let score=0;
    this.answers.forEach((value: number, key: number) => {
           
      if(this.answers.get(key)==this.submittedAnswers.get(key)){
        ++score;
      } else {
        let questionAnswerTuple = this.questionService.getQuestionAnswerTuple(key - 1,this.answers.get(key))
        this.incorrectSubmissions.set(questionAnswerTuple[0],questionAnswerTuple[1]);
      }
  });
  

  let result:Result = new Result();
  result.score=score;
  result.solution=this.incorrectSubmissions;
  return result;
  }

  markOption(questionId:number, selectedOption:number){
    this.submittedAnswers.set(questionId,selectedOption);
  }

  reset(){
    this.submittedAnswers= new Map<number,number>();
  }

}