import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'rp-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => *',
        animate('5s', keyframes([
          style({opacity: '0', offset: 0}),
          style({opacity: '1', offset: 0.25}),
          style({opacity: '1', offset: 0.5}),
          style({opacity: '1', offset: 0.75}),
          style({opacity: '0', offset: 1}),
        ])))
    ])
  ]
})
export class CommentComponent implements OnInit {

  @Input() screenWidth;
  @Input() screenHeight;
  @ViewChild('comment') comment;

  top = 0;
  left = 0;
  state = false;
  notFirstOnDone = 0;

  comments: {name: string, comment: string}[]  = [
    {name: '', comment: ''},
  ];

  randomEntry: { name: string, comment: string } = this.comments[0];

  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    const timeout = Math.random() * 10000;

    this.db.collection('comments').valueChanges().subscribe(
      (data) => {
        this.comments = data as {name: string, comment: string}[];
      }
    )

    setTimeout(() => {
      this.state = true;
    }, timeout)

  }

  onDone($event) {
    this.randomEntry = this.comments[Math.floor(Math.random() * this.comments.length)];
    if (this.notFirstOnDone !== 0) {
      this.state = !this.state;
      this.top = Math.floor(Math.random() * (this.screenHeight - this.comment.nativeElement.offsetHeight));
      this.left = Math.floor(Math.random() * (this.screenWidth - this.comment.nativeElement.offsetWidth));
    }
    this.notFirstOnDone = 1;
  }

}
