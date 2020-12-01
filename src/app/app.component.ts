import { Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import { Observable, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup
  private readonly existedUsernames = ['john', 'jane']

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        password: this.fb.control(
          '',
          Validators.required,
          this.userValidator()
        ),
        reTypePassword: ['', Validators.required],
      },
      {
        validators: fieldsMatch('password', 'reTypePassword'),
      }
    )
  }

  userExists(username: string): Observable<boolean> {
    return of(this.existedUsernames.includes(username)).pipe(delay(1000))
  }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      this.userExists(control.value).pipe(
        map((response) => (response ? { userExists: true } : null))
      )
  }
}

export function fieldsMatch(control1Name, control2Name): ValidatorFn {
  return (group: FormGroup): ValidationErrors => {
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
