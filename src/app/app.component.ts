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
      firstName: new FormControl(),
      lastName: new FormControl(),
    })
  }
}
