import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private answer = '';
  private positiveInteger;
  private firstSingleDigit;
  private secondSingleDigit;
  private firstReminder;
  private secondReminder;
  ngOnInit() {
    this.secondReminder = this.positiveInteger % this.secondSingleDigit;
  }
  onSubmit() {
    if (this.firstSingleDigit === this.secondSingleDigit) {
      alert('first digit and second digit cant be same');
      return;
    }
    if (this.firstSingleDigit < 2 || this.secondSingleDigit < 2) {
      alert('Both first digit and second digit should be greater than 1');
      return;
    }
    let myNum = '';
    for (let i = 0; i < this.positiveInteger; i++) {

               if (i % this.firstSingleDigit === 0 && i % this.secondSingleDigit === 0) {
                myNum = 'WATSON';
               } else if (i % this.firstSingleDigit === 0 && i % this.secondSingleDigit !== 0  && i > this.firstSingleDigit) {
                myNum = 'WAT';
               } else if (i % this.firstSingleDigit !== 0 && i % this.secondSingleDigit === 0 && i > this.secondSingleDigit) {
                myNum = 'SON';
              } else {
                if ((i + '').indexOf('' + this.firstSingleDigit) > -1 || (i + '').indexOf('' + this.secondSingleDigit) > -1) {
                  myNum = i.toString();
                }
                myNum = i.toString();
               }
         if (i > 0) {
          this.answer += myNum + ' ';
         }
         console.log(this.answer);

    }
  }


}
