import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
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
      password: [],
      reTypePassword: [],
    })

    this.myFormSubscription = this.myForm.valueChanges.subscribe((formModel) =>
      console.log(formModel)
    )
  }

  ngOnDestroy() {
    this.myFormSubscription?.unsubscribe()
  }
}
