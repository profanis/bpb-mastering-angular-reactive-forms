import {
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
} from '@angular/core'
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalInfoComponent),
      multi: true,
    },
  ],
})
export class PersonalInfoComponent implements ControlValueAccessor, OnInit {
  personalInfoForm: FormGroup
  @Output() next = new EventEmitter()
  constructor(private fb: FormBuilder) {}

  onTouched: () => void = () => {}
  writeValue(obj: any): void {
    if (obj) {
      this.personalInfoForm.patchValue(obj)
    }
  }

  registerOnChange(fn: any): void {
    this.personalInfoForm.valueChanges.subscribe(fn)
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.personalInfoForm.disable()
    } else {
      this.personalInfoForm.enable()
    }
  }

  ngOnInit() {
    this.personalInfoForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
    })
  }
}
