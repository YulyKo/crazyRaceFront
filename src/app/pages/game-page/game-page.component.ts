import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  text = 'my text';
  indexLetter = 0;
  indexSpan = 0;
  letters = [{
    symbol: this.text.split(''),
    display: false,
    correct: false
  }];
  typedLetter: string;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.typedLetter = event.key;
    this.checkLetter();
  }

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.letters[0].symbol.length; i++) {
      const child = document.createElement('span');
      child.innerText = this.letters[0].symbol[i];
      document.getElementById('textZone').appendChild(child);
      child.setAttribute('id', String(i));
      child.setAttribute('class', 'text');
    }
  }

  checkLetter() {
    const span = document.getElementById(String(this.indexSpan));
    if ( this.letters[0].symbol[this.indexLetter] === this.typedLetter ) {
      this.letters[0].correct = true;
      this.indexLetter ++;
      this.indexSpan ++;
      span.style.backgroundColor = '#67ff65';
    } else {
      span.style.backgroundColor = 'coral';
    }
  }
}
