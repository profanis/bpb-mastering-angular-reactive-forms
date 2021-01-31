import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup

  get colors() {
    return this.myForm.get('colors') as FormArray
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      colors: new FormArray([
        new FormGroup({ name: new FormControl('Red') }),
        new FormGroup({ name: new FormControl('Green') }),
        new FormGroup({ name: new FormControl('Blue') }),
      ]),
    })
  }

  addColor(value?: string) {
    this.colors.push(
      new FormGroup({
        name: new FormControl(value),
      })
    )
  }

  removeColor(index: number) {
    this.colors.removeAt(index)
  }
}
