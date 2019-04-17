import {Component, HostListener, OnInit} from '@angular/core';
import { TweenMax } from 'gsap';
import {Data} from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  text = 'Whenever new elements are added to it, its increase their size automatically.';
  indexLetter = 0;
  indexSpan = 0;
  letters = [{
    symbol: this.text.split(''),
    display: false,
    correct: false
  }];
  typedLetter: string;
  start;
  finish;
  timeOfThisLatter;
  timeOfLastLatter: number;
  speedNow = 270;
  positionRaf = 0;
  positionOpponent = 0;
  positionBackground = 0;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.typedLetter = event.key;
    this.checkLetter();
  }

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.letters[0].symbol.length; i++) {
      const child = document.createElement('span');
      child.innerText = this.letters[0].symbol[i];
      document.getElementById('textZone').appendChild(child);
      child.setAttribute('id', String(i));
      child.setAttribute('class', 'text');
    }
    this.start = Date.now();
    this.timeOfLastLatter = this.start;
    console.log(this.start);
    this.move();
  }

  checkLetter() {
    const span = document.getElementById(String(this.indexSpan));
    if (this.letters[0].symbol[this.indexLetter] === this.typedLetter) {
      this.letters[0].correct = true;
      this.timeOfThisLatter = Date.now();
      // console.log(this.timeOfThisLatter);
      this.speedNow += 1000 / (this.timeOfThisLatter - this.timeOfLastLatter);
// console.log('symbol:  ' + this.letters[0].symbol[this.indexLetter] + '   ' + this.speedNow + ' = 1000 /' + this.timeOfThisLatter + ' - ' + this.timeOfLastLatter);
      this.timeOfLastLatter = this.timeOfThisLatter;
      this.indexLetter++;
      this.indexSpan++;
      span.style.backgroundColor = 'rgb(13, 101, 12)';
      span.style.display = 'none';
    } else {
      span.style.backgroundColor = '#8a0505';
    }
  }

  // move() {
  //    this.moveIt();
  //    requestAnimationFrame(() => this.move);
  // }

  move() {
    this.checkPosition();
    this.positionOpponent += Math.round(Math.random() * 10 + 5);
    // this.transformOfBlocks();
    requestAnimationFrame(() => this.move());
    this.speedNow -= 0.05 * this.speedNow;
    if (this.speedNow < 0) {
      this.speedNow = 0;
    }
  }

  checkPosition() {
    const MAX_POSITION = 460;
    const speed = Math.round(this.speedNow / 10);
    if (this.positionRaf > MAX_POSITION) {
      this.positionBackground -= speed;
    } else {
      this.positionRaf += speed;
      console.log('math round:  ' + speed);
    }
  }

  transformOfBlocks() {
    let x = 0;
    setInterval(() => {
        x -= 1;
        document.getElementById('background-tree').style.transform = `translateX(${ this.positionBackground }px)`;
      }, 110);
    document.getElementById('car').style.transform = `translateX(${ this.positionRaf }px)`;
    document.getElementById('carOpponent').style.transform = `translateX(${ this.positionOpponent }px)`;
  }
}
