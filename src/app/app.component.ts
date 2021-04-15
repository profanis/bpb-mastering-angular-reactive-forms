import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  template: ` <input
    type="text"
    placeholder="First Name"
    [formControl]="firstName"
  />`,
})
export class AppComponent implements OnInit, OnDestroy {
  firstName = this.fb.control('')
  private firstNameSubscription!: Subscription

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firstNameSubscription = this.firstName.valueChanges.subscribe(
      (value) => console.log(value)
    )
  }

  ngOnDestroy() {
    this.firstNameSubscription?.unsubscribe()
  }
}
