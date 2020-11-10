import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstName = this.fb.control(null, Validators.required)
  lastName = this.fb.control(null, [
    Validators.required,
    Validators.minLength(3),
  ])

  constructor(private fb: FormBuilder) {}
}
