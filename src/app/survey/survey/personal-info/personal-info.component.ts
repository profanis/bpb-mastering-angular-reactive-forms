import { Component, OnInit } from '@angular/core'
import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup
  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.personalInfoForm = this.formGroupDirective.control
  }
}
