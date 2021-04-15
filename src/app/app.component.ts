import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup

  get colors() {
    return this.myForm.get('colors') as FormArray
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      basicInfo: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        age: new FormControl(),
      }),
      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        postal: new FormControl(),
      }),
    })

    this.myForm.setValue(this.mockData())
  }

  submitForm() {
    // consume a service method here which will delegate the request on an API request
    console.log(this.myForm.value)
  }

  private mockData() {
    return {
      basicInfo: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        age: '76',
      },
      address: {
        street: 'street name',
        number: '12',
        postal: '49000',
      },
    }
  }
}
