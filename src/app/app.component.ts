import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  myForm: FormGroup
  private myFormSubscription: Subscription

  get colors() {
    return this.myForm.get('colors') as FormArray
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      colors: this.fb.array([
        this.fb.group({ name: [] }),
        this.fb.group({ name: [] }),
      ]),
    })

    this.myFormSubscription = this.colors.valueChanges.subscribe((formArray) =>
      console.log(formArray)
    )
  }

  ngOnDestroy() {
    this.myFormSubscription?.unsubscribe()
  }
}
