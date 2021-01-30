import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  firstNameControl: FormControl
  lastNameControl: FormControl

  ngOnInit(): void {
    this.firstNameControl = new FormControl()
    this.lastNameControl = new FormControl()
  }
}
