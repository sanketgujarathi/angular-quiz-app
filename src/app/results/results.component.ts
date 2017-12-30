import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';
import { Result } from './results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result:Result;
  constructor(private resultsService:ResultsService) { }

  ngOnInit() {
    this.result=this.resultsService.submit();
  }

}
