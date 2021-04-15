import { Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        password: ['', Validators.required],
        reTypePassword: ['', Validators.required],
      },
      {
        validators: fieldsMatch('password', 'reTypePassword'),
      }
    )
  }
}

export function fieldsMatch(
  control1Name: string,
  control2Name: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const group = control as FormGroup
    const control1Value = group.controls[control1Name].value
    const control2Value = group.controls[control2Name].value

    if (!control1Value && !control2Value) {
      return null
    }

    return control1Value === control2Value
      ? null
      : {
          fieldsDoNotMatch: true,
          control1Name: control1Value,
          control2Name: control2Value,
        }
  }
}
