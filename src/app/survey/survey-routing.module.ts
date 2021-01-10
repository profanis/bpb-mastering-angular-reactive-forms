import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HearAboutUsComponent } from './survey/hear-about-us/hear-about-us.component'
import { PersonalInfoComponent } from './survey/personal-info/personal-info.component'
import { RecommendUsComponent } from './survey/recommend-us/recommend-us.component'
import { SurveyComponent } from './survey/survey.component'

const routes: Routes = [
  {
    path: 'survey',
    component: SurveyComponent,
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
      },
      {
        path: 'hear-about-us',
        component: HearAboutUsComponent,
      },
      {
        path: 'recommend-us',
        component: RecommendUsComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
