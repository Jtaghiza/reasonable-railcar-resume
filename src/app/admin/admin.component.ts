import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'rp-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  underReviewitems: Observable<any[]>;
  prodComments: Observable<any []>;
  underReviewSnapshot: any;
  commentsSnapshot: any;

  test: any;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.underReviewitems = this.db.collection('under-review').valueChanges();
    this.db.collection('under-review').snapshotChanges().subscribe((data) => this.underReviewSnapshot = data);


    this.prodComments = this.db.collection('comments').valueChanges();
    this.db.collection('comments').snapshotChanges().subscribe((data) => this.commentsSnapshot = data);
  }

  addToApproved(item, itemNumber) {
    this.db.collection('comments').add(item);
    this.db.collection('under-review').doc(this.underReviewSnapshot[itemNumber].payload.doc.id).delete();
  }

  removeFromList(itemNumber) {
    this.db.collection('under-review').doc(this.underReviewSnapshot[itemNumber].payload.doc.id).delete();
  }

  deleteFromProd(itemNumber) {
    this.db.collection('comments').doc(this.commentsSnapshot[itemNumber].payload.doc.id).delete();
  }

  editProd(item, itemNumber) {
    this.db.collection('comments').doc(this.commentsSnapshot[itemNumber].payload.doc.id).update(item);
  }

}
