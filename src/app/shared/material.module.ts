import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
})
export class MaterialModule {
}
