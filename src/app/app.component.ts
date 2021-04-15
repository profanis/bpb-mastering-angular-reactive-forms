import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  myForm!: FormGroup
  private valueChangesSubscription!: Subscription

  get colors() {
    return this.myForm.get('colors') as FormArray
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      colors: this.fb.array([
        this.fb.group({ name: [null, Validators.required] }),
        this.fb.group({ name: [null, Validators.required] }),
      ]),
    })

    this.valueChangesSubscription = this.myForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
  }

  ngOnDestroy() {
    this.valueChangesSubscription?.unsubscribe()
  }
}
