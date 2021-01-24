import { Component, OnInit } from '@angular/core'
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressComponent,
      multi: true,
    },
  ],
})
export class AddressComponent implements OnInit, ControlValueAccessor {
  form: FormGroup
  onChange: (value: boolean) => void
  onTouch: () => void

  constructor(private fb: FormBuilder) {}

  writeValue(obj: any): void {
    if (obj) {
      this.form.patchValue(obj, { emitEvent: false })
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn)
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
      street: [],
      number: [],
      postal: [],
    })
  }
}
