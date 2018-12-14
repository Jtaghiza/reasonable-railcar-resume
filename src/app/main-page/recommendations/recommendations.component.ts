import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material';
import {SubmitCommentDialogComponent} from './submit-comment-dialog/submit-comment-dialog.component';

@Component({
  selector: 'rp-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations: [
    trigger('fade', [
      transition('* <=> *',
        animate('1s', keyframes([
          style({opacity: '0', offset: 0}),
          style({opacity: '1', offset: 0.5}),
          style({opacity: '0', offset: 1}),
        ])))
    ])
  ]
})

export class RecommendationsComponent {

  comments = [1, 2, 3, 4];

  constructor(public  dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SubmitCommentDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
