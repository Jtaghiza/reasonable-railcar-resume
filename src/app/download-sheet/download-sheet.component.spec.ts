import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSheetComponent } from './download-sheet.component';

describe('DownloadSheetComponent', () => {
  let component: DownloadSheetComponent;
  let fixture: ComponentFixture<DownloadSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
