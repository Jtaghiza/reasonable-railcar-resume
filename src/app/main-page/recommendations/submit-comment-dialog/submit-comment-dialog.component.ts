import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'rp-submit-comment-dialog',
  templateUrl: './submit-comment-dialog.component.html',
  styleUrls: ['./submit-comment-dialog.component.scss']
})
export class SubmitCommentDialogComponent {

  constructor(public dialogRef: MatDialogRef<SubmitCommentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) { }

  doSomething() {

  }
}
