import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RenderType } from 'src/app/interfaces/render-type.enum';
import { Words } from 'src/app/interfaces/words';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  input = new FormGroup({
    words: new FormControl('', [
      Validators.required,
    ]),
    wpm: new FormControl(120, [
      Validators.required,
      Validators.min(1),
    ]),
    // TODO Add External Window Support
    mode: new FormControl(RenderType.CURRENT_PAGE, [
      Validators.required,
    ])
  });

  renderOutput: Words;

  timer: any;
  inProgress: boolean;
  isPaused: boolean;
  currentWordIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.renderOutput = {
      previous: '',
      current: 'Press Play',
      next: '',
    };
    this.inProgress = false;
    this.isPaused = false;
    this.currentWordIndex = 0;
  }

  play(): void {
    this.timer = window.setInterval(() => {
      const words: Array<string> = this.input.getRawValue().words.split(/[\s\n]+/);
      this.renderOutput = {
        previous: words[this.currentWordIndex - 1],
        current: words[this.currentWordIndex],
        next: words[this.currentWordIndex + 1],
      };
      this.currentWordIndex += 1;
      if (this.currentWordIndex > words.length + 1) {
        this.stop();
      }
    }, 60000 / this.input.getRawValue().wpm);
    this.inProgress = true;
    this.isPaused = false;
  }
  pause(): void {
    window.clearInterval(this.timer);
    this.inProgress = true;
    this.isPaused = true;
  }
  stop(): void {
    window.clearInterval(this.timer);
    this.inProgress = false;
    this.isPaused = false;
    this.currentWordIndex = 0;
    this.renderOutput = {
      previous: '',
      current: 'Press Play',
      next: '',
    };
  }

}
