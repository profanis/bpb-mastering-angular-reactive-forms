import { Component, OnInit } from '@angular/core'
import { FormGroup, FormGroupDirective } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup
  constructor(
    private formGroupDirective: FormGroupDirective,
    private router: Router
  ) {}

  ngOnInit() {
    this.personalInfoForm = this.formGroupDirective.control
  }

  navigateTo(url: string) {
    this.router.navigate([url])
  }
}
