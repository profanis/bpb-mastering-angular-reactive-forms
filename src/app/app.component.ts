import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
  }

  submit() {
    if (this.myForm.invalid) {
      return
    }

    this.appService.save(this.myForm.value)
  }
}
