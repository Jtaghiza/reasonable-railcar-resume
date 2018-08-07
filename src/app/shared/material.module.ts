
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';


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
        MatTooltipModule
    ],
    providers: [],
})
export class MaterialModule {}
