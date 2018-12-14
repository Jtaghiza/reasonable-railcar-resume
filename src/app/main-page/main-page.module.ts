import {NgModule} from '@angular/core';
import {MainPageRoutingModule} from './main-page-routing.module';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from '../shared/shared.module';
import {ExperiencesComponent} from './experiences/experiences.component';
import {AbilitiesComponent} from './abilities/abilities.component';
import {SkillComponent} from './abilities/skill/skill.component';
import {FeatureProjectsComponent} from './feature-projects/feature-projects.component';
import {ContactComponent} from './contact/contact.component';
import {HistoryComponent} from './experiences/history/history.component';
import {RecommendationsComponent} from './recommendations/recommendations.component';
import {CommentComponent} from './recommendations/comment/comment.component';
import {SubmitCommentDialogComponent} from './recommendations/submit-comment-dialog/submit-comment-dialog.component';
import {FormsModule} from '@angular/forms';

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
    RecommendationsComponent,
    CommentComponent,
    SubmitCommentDialogComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MainPageRoutingModule
  ],
  exports: [],
  providers: [],
  entryComponents: [
    SubmitCommentDialogComponent
  ],
})
export class MainPageModule {
}
