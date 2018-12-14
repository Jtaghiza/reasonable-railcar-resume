import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCommentDialogComponent } from './submit-comment-dialog.component';

describe('SubmitCommentDialogComponent', () => {
  let component: SubmitCommentDialogComponent;
  let fixture: ComponentFixture<SubmitCommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
