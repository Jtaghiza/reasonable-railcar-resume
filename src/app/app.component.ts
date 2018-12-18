import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navState', [
        state('true', style({
          transform: 'translateX({{posX}}px) translateY({{posY}}px) scale(1) ',
          opacity: 1
        }), {params: {posX: '0', posY: '0'}}),
        state('false', style({
          transform: 'scale(0.5) ',
          opacity: 0,
          pointerEvents: 'none'
        })),
        transition('false => true', animate('200ms {{waitTime}}ms ease-in'), {params: {waitTime: '0'}}),
        transition('true => false', animate('200ms ease-out'))
      ]
    )
  ]
})
export class AppComponent {
  navState = false

  constructor() {
  }

  toggleNav() {
    this.navState = !this.navState;
  }

  closeNav() {
    this.navState = false;
  }

  openNav() {
    this.navState = true;
  }

  onBlur() {
    setTimeout(() => this.closeNav(), 300);
  }
}
