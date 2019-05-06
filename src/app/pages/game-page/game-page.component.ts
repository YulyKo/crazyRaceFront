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
  speedCar = 5;
  speedOpponent = 5;
  positionCar = 0;
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
      if (this.indexLetter === this.letters[0].symbol.length - 1) {
        this.finish = this.timeOfThisLatter;
      }
      // console.log(this.timeOfThisLatter);
      this.speedCar += 1000 / (this.timeOfThisLatter - this.timeOfLastLatter);
      // Do: sent to server
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
    if (this.finish || this.indexLetter === 0) {
      this.speedCar -= 0.1;
      if (this.speedCar < 0) {
        this.speedCar = 0;
        this.speedOpponent = 0;
      }
    }
    this.transformOfBlocks();
    requestAnimationFrame(() => this.move());
  }

  checkPosition() {
    const MAX_POSITION = 460;
    const speed = this.speedCar; // this may contain const for animation (now remove it)
    this.speedOpponent = Math.random() * 5 + 5;
    if (this.positionCar > MAX_POSITION) {
      this.positionBackground -= speed;
      this.positionOpponent += this.speedOpponent - speed;
    } else {
      this.positionCar += speed;
      this.positionOpponent += this.speedOpponent;
      console.log('math round:  ' + speed);
    }
  }

  transformOfBlocks() {
    /* let x = 0;
    setInterval(() => {
        x -= 1;
        document.getElementById('background-tree').style.transform = `translateX(${ Math.round(this.positionBackground) }px)`;
      }, 110); */

    document.getElementById('background-tree').style.transform = `translateX(${ Math.round(this.positionBackground) }px)`;

    document.getElementById('car').style.transform = `translateX(${ Math.round(this.positionCar) }px)`;
    document.getElementById('carOpponent').style.transform = `translateX(${ Math.round(this.positionOpponent) }px)`;
  }
}
