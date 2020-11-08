import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup

  get colors() {
    return this.myForm.get('colors') as FormArray
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      colors: this.fb.array([
        this.getFormArrayItem('Red'),
        this.getFormArrayItem(),
      ]),
    })
  }

  private getFormArrayItem(value?: string) {
    return this.fb.group({
      name: [value, Validators.required],
    })
  }
}
