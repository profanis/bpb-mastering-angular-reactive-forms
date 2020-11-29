import { Component } from '@angular/core'
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms'
import { Observable, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username = this.fb.control('', [exactCharacters(5)], [this.userValidator()])

  private readonly existedUsernames = ['john', 'jane']

  constructor(private fb: FormBuilder) {}

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

export function exactCharacters(length: number): ValidatorFn {
  return (control: FormControl): ValidationErrors | null => {
    const controlLength = control.value?.toString()?.length

    return controlLength === length
      ? null
      : {
          exactCharacters: {
            requiredLength: length,
            actualLength: controlLength,
          },
        }
  }
}
