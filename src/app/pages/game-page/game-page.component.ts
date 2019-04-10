import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  text = 'To store dynamically-sized elements in Java, we used ArrayList. Whenever new elements are added to it, its increase their size automatically. ArrayList implements Java’s List Interface and part of Java’s Collection.';
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
  }

  checkLetter() {
    const span = document.getElementById(String(this.indexSpan));
    if (this.letters[0].symbol[this.indexLetter] === this.typedLetter) {
      this.letters[0].correct = true;
      this.indexLetter++;
      this.indexSpan++;
      span.style.backgroundColor = 'rgb(13, 101, 12)';
      span.style.display = 'none';
    } else {
      span.style.backgroundColor = '#8a0505';
    }
  }
}
