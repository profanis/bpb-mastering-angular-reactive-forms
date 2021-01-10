import { Component, OnInit } from '@angular/core'
import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  templateUrl: './recommend-us.component.html',
  styleUrls: ['./recommend-us.component.scss'],
})
export class RecommendUsComponent implements OnInit {
  recommendUsForm: FormGroup
  range = [...new Array(10)].map((it, index) => index + 1)
  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.recommendUsForm = this.formGroupDirective.control
  }
}
