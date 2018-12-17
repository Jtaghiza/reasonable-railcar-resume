import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminGuard} from './admin.guard';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  exports: [],
  providers: [ ],
})
export class AdminModule {
}
