import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  surveyForm: FormGroup
  activeStep = 1

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm()
  }

  private buildForm() {
    this.surveyForm = this.fb.group({
      personalInfo: [],
      hearAboutUs: [],
      recommendUs: [],
    })
  }
}
