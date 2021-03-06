import { Component, OnInit, Input } from '@angular/core';
import { History } from './history.model'

@Component({
  selector: 'rp-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  @Input('history') history: History;

}
