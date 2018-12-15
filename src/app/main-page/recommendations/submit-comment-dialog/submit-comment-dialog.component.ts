import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'rp-submit-comment-dialog',
  templateUrl: './submit-comment-dialog.component.html',
  styleUrls: ['./submit-comment-dialog.component.scss']
})
export class SubmitCommentDialogComponent  {

  newEntry: {name: string, comment: string} = {name: '', comment: ''};

  items: Observable<any[]>;
  constructor(public dialogRef: MatDialogRef<SubmitCommentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string, private db: AngularFirestore) { }


  submitComment() {
    this.db.collection('under-review').add({name: 'jeremy', comment: 'my comment about you'});
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
