import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  surveyForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm()
  }

  private buildForm() {
    this.surveyForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        gender: [null, Validators.required],
      }),
      hearAboutUs: this.fb.group({
        info: [null, Validators.required],
      }),
      recommendUs: this.fb.group({
        range: [null, Validators.required],
        reason: [],
      }),
    })

    this.surveyForm.get('recommendUs.range').valueChanges.subscribe((range) => {
      if (Number(range) === 1) {
        this.surveyForm
          .get('recommendUs.reason')
          .setValidators(Validators.required)
      } else {
        this.surveyForm.get('recommendUs.reason').clearValidators()
      }
      this.surveyForm.get('recommendUs.reason').updateValueAndValidity()
    })
  }
}
