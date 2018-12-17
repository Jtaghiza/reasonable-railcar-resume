import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material';
import {SubmitCommentDialogComponent} from './submit-comment-dialog/submit-comment-dialog.component';

@Component({
  selector: 'rp-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})

export class RecommendationsComponent {


  constructor(public  dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SubmitCommentDialogComponent, {
      width: '250px',
      height: '300px',
      panelClass: 'hide-mat-dialog-container'
    });

  }
}
