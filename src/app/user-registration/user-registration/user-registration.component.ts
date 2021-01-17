import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [],
        lastName: [],
        email: [],
        age: [],
      }),
      address: this.fb.group({
        street: [],
        // eslint-disable-next-line id-blacklist
        number: [],
        postal: [],
      }),
    })

    this.userForm.get('basicInfo.age').valueChanges.subscribe((value) => {
      if (Number(value) === 18) {
        this.userForm.get('address.postal').setValidators(Validators.required)
      } else {
        this.userForm.get('address.postal').clearValidators()
      }
      this.userForm.get('address.postal').updateValueAndValidity()
    })
  }
}
