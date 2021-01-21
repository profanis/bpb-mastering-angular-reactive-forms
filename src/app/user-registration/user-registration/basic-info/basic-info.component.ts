import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core'
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true,
    },
  ],
})
export class BasicInfoComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  form: FormGroup
  onTouch: () => void
  private valueSubscription: Subscription

  constructor(private fb: FormBuilder) {}

  writeValue(obj: any): void {
    if (obj) {
      this.form.patchValue(obj, { emitEvent: false })
    }
  }

  registerOnChange(fn: any): void {
    this.valueSubscription = this.form.valueChanges.subscribe(fn)
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable()
    } else {
      this.form.enable()
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      age: [],
    })
  }

  ngOnDestroy(): void {
    this.valueSubscription?.unsubscribe()
  }
}
