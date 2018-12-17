import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminGuard} from './admin.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
        ])
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
