import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  remainingTime:[number,number];
  constructor(private router: Router) { }

  ngOnInit() {
    this.remainingTime = [2,0];
    this.updateTime();
  }

  updateTime(){
    setInterval(()=>{ this.calculateRemainingTime() }, 1000)
  }

  calculateRemainingTime(){
    console.log("Hello");
    if(!(this.remainingTime[0]==0 && this.remainingTime[1]==0)){
    if (this.remainingTime[1]==0) {
        this.remainingTime[1] = 59;
      --this.remainingTime[0];
    } else {
      --this.remainingTime[1];
    }
    } else {
      this.router.navigate(['results']);
    }
  }

}
