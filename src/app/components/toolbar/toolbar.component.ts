import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // TODO Theme Switching and About Model
  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    const classes = this.overlayContainer.getContainerElement().classList;
    if (classes.contains('light-theme')) {
      classes.remove('light-theme');
      classes.add('dark-theme');
    } else {
      classes.remove('dark-theme');
      classes.add('light-theme');
    }
    const bodyClasses = document.getElementsByTagName('body')[0].classList;
    if (bodyClasses.contains('light-theme')) {
      bodyClasses.remove('light-theme');
      bodyClasses.add('dark-theme');
    } else {
      bodyClasses.remove('dark-theme');
      bodyClasses.add('light-theme');
    }
  }

}
