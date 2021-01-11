import {
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
} from '@angular/core'
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-hear-about-us',
  templateUrl: './hear-about-us.component.html',
  styleUrls: ['./hear-about-us.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HearAboutUsComponent),
      multi: true,
    },
  ],
})
export class HearAboutUsComponent implements ControlValueAccessor, OnInit {
  hearAboutUsForm = new FormControl(null, Validators.required)
  @Output() next = new EventEmitter()

  onTouched: () => void = () => {}

  writeValue(value: string): void {
    if (value) {
      this.hearAboutUsForm.patchValue(value)
    }
  }

  registerOnChange(fn: any): void {
    this.hearAboutUsForm.valueChanges.subscribe(fn)
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.hearAboutUsForm.disable()
    } else {
      this.hearAboutUsForm.enable()
    }
  }

  ngOnInit(): void {
    // this.hearAboutUsForm = this.formGroupDirective.control
  }
}
