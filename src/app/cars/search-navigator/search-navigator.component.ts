import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-search-navigator',
  templateUrl: './search-navigator.component.html',
  styleUrls: ['./search-navigator.component.scss'],
  animations: [
    trigger('ngSwitch', [
      state('show', style({
      })),
      transition('void => show', [style({
        transform: 'translateX(100%)'
      }), animate('200ms')])
    ]),
    trigger('ngSwitchTabs', [
      state('show', style({
        transform: 'skewX(45deg)'
      })),
      transition('void => *', [style({
        transform: 'translateX(100%) skewX(45deg)'
      }), animate('200ms')])
    ]),
  ]
})
export class SearchNavigatorComponent implements OnInit {
  currentTab = 1;

  constructor() {
  }

  ngOnInit() {
  }
}

