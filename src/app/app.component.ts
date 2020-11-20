import { Component } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstName = this.fb.control('', Validators.minLength(3))
  lastName = this.fb.control('', exactCharacters(20))

  constructor(private fb: FormBuilder) {}
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
