import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'rp-download-sheet',
  templateUrl: './download-sheet.component.html',
  styleUrls: ['./download-sheet.component.scss']
})
export class DownloadSheetComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<DownloadSheetComponent>) {}


}
