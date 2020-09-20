import { Component, OnInit, Input } from '@angular/core';
import { Words } from 'src/app/interfaces/words';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements OnInit {

  @Input()
  words: Words;

  constructor() { }

  ngOnInit(): void {
  }

}
