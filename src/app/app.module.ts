import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { SurveyModule } from './survey/survey.module'
import { UserRegistrationModule } from './user-registration/user-registration.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SurveyModule,
    UserRegistrationModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'survey',
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
