import { Injectable } from '@angular/core';
import { Question } from './question/question';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class QuestionService {

  private index:number;
  question:Question[] = [{
    id:1,
    text:'All classes in Java are inherited from which class?',
    options:[ 'java.lang.Class', 'java.class.Inherited', 'java.class.Object', 'java.lang.Object'],
    selectedOption:-1},
  {
    id:2,
    text:'What type of members are not serialized?',
    options:[ 'Private', 'Protected', 'Static', 'Volatile'],
    selectedOption:-1},
  {
    id:3,
    text:'Which of the following is a super class of all exception type classes?',
    options:[ 'Catchable', 'RuntimeExceptions', 'String', 'Throwable'],
    selectedOption:-1
    }];
  
  constructor() { 
    this.index=-1;
  }

  next():Question{
    if(this.index+1<this.question.length){
      ++this.index;
    }
    return this.question[this.index];
  }

  prev():Question{
    if(this.index > 0){
      --this.index;
    }
    return this.question[this.index];
  }

  getQuestionCount():number{
    return this.question.length;
  }

  getQuestionAnswerTuple(questionId:number,optionId:number):[string, string]{
    return [this.question[questionId].text,this.question[questionId].options[optionId]];
  }

  reset(){
    this.index=-1;
  }

  isFirst():boolean{
    return this.index==0;
  }

  isLast():boolean{
    return this.index==this.question.length - 1;
  }
}
