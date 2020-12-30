import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  myForm: FormGroup
  private myFormSubscription: Subscription

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      country: [null, Validators.required],
      postal: [],
    })

    this.observeAndAdjustValidators()
  }

  ngOnDestroy() {
    this.myFormSubscription?.unsubscribe()
  }

  private observeAndAdjustValidators() {
    this.myFormSubscription = this.myForm
      .get('country')
      .valueChanges.subscribe((country) => {
        if (country === 'Country 1') {
          this.myForm.get('postal').setValidators(Validators.required)
        } else {
          this.myForm.get('postal').clearValidators()
        }
        this.myForm.get('postal').updateValueAndValidity()
      })
  }
}
