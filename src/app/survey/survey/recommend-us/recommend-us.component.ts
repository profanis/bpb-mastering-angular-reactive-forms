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
  selector: 'app-recommend-us',
  templateUrl: './recommend-us.component.html',
  styleUrls: ['./recommend-us.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RecommendUsComponent),
      multi: true,
    },
  ],
})
export class RecommendUsComponent implements OnInit, ControlValueAccessor {
  recommendUsForm: FormGroup
  @Output() next = new EventEmitter()
  range = [...new Array(10)].map((it, index) => index + 1)

  constructor(private fb: FormBuilder) {}
  onTouched: () => void = () => {}

  writeValue(obj: any): void {
    if (obj) {
      this.recommendUsForm.patchValue(obj, { emitEvent: false })
    }
  }

  registerOnChange(fn: any): void {
    this.recommendUsForm.valueChanges.subscribe(fn)
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.recommendUsForm.disable()
    } else {
      this.recommendUsForm.enable()
    }
  }

  ngOnInit() {
    this.recommendUsForm = this.fb.group({
      range: [null, Validators.required],
      reason: [],
    })

    this.recommendUsForm.get('range').valueChanges.subscribe((range) => {
      if (Number(range) === 1) {
        this.recommendUsForm.get('reason').setValidators(Validators.required)
      } else {
        this.recommendUsForm.get('reason').clearValidators()
      }
      this.recommendUsForm.get('reason').updateValueAndValidity()
    })
  }
}
