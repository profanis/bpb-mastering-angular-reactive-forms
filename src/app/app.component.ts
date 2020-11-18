import { Component } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstName = this.fb.control('', Validators.required)
  lastName = this.fb.control('', exactCharacters(20))

  constructor(private fb: FormBuilder) {}
}

export function exactCharacters(minCharactersValue: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value?.toString()?.length === minCharactersValue
      ? null
      : { minCharacters: control.value }
}
