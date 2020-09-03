import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup

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
  }
}
