import { Component, OnInit } from '@angular/core'
import { FormGroup, FormGroupDirective } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  templateUrl: './hear-about-us.component.html',
  styleUrls: ['./hear-about-us.component.scss'],
})
export class HearAboutUsComponent implements OnInit {
  hearAboutUsForm: FormGroup
  constructor(
    private formGroupDirective: FormGroupDirective,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hearAboutUsForm = this.formGroupDirective.control
  }

  navigateTo(url: string) {
    this.router.navigate([url])
  }
}
