import { NgModule } from '@angular/core';
import { MainPageRoutingModule } from './main-page-routing.module';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { SkillComponent } from './abilities/skill/skill.component';
import { FeatureProjectsComponent } from './feature-projects/feature-projects.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './experiences/history/history.component';

@NgModule({
    declarations: [
        MainPageComponent,
        ProfileComponent,
        ExperiencesComponent,
        AbilitiesComponent,
        SkillComponent,
        FeatureProjectsComponent,
        ContactComponent,
        HistoryComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainPageRoutingModule
    ],
    exports: [

    ],
    providers: [],
})
export class MainPageModule { }
