import { Component, OnInit } from '@angular/core'
import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  templateUrl: './hear-about-us.component.html',
  styleUrls: ['./hear-about-us.component.scss'],
})
export class HearAboutUsComponent implements OnInit {
  hearAboutUsForm: FormGroup
  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.hearAboutUsForm = this.formGroupDirective.control
  }
}
