import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private answer;
  private positiveInteger;
  private firstSingleDigit;
  private secondSingleDigit;
  private firstReminder;
  private secondReminder;
  ngOnInit() {
    this.firstReminder = this.positiveInteger % this.firstSingleDigit;
    this.secondReminder = this.positiveInteger % this.secondSingleDigit;
  }
  onSubmit() {
    console.log(this.positiveInteger);
    for (let i = 0; i < this.positiveInteger; i++) {
        console.log(i);
         this.answer = i + '&nbsp;';
    }
  }


}
