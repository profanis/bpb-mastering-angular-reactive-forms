import { Component } from '@angular/core'
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ValidationErrors,
} from '@angular/forms'
import { Observable, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { exactCharacters } from './custom-validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly existedUsernames = ['john', 'jane']
  // username = this.fb.control('', [exactCharacters(4)], [this.userValidator()])

  username = this.fb.control('', {
    validators: [exactCharacters(4)],
    asyncValidators: [this.userValidator()],
  })

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
