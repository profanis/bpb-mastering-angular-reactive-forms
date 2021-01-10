import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SurveyRoutingModule } from './survey-routing.module'
import { HearAboutUsComponent } from './survey/hear-about-us/hear-about-us.component'
import { PersonalInfoComponent } from './survey/personal-info/personal-info.component'
import { RecommendUsComponent } from './survey/recommend-us/recommend-us.component'
import { SurveyComponent } from './survey/survey.component'

@NgModule({
  declarations: [
    SurveyComponent,
    PersonalInfoComponent,
    HearAboutUsComponent,
    RecommendUsComponent,
  ],
  imports: [CommonModule, SurveyRoutingModule, ReactiveFormsModule],
  exports: [SurveyRoutingModule],
})
export class SurveyModule {}
