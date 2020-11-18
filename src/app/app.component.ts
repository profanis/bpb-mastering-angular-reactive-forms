import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms'

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      colors: this.fb.array(
        [this.getFormArrayItem('Red'), this.getFormArrayItem()],
        { validators: [allValuesShouldBeDifferent('name')] }
      ),
    })
  }

  private getFormArrayItem(value?: string) {
    return this.fb.group({
      name: [value],
    })
  }
}

export function allValuesShouldBeDifferent(property): ValidatorFn {
  return (formArray: FormArray) => {
    const hasDuplicates = formArray.value
      .map((it) => it[property])
      .reduce((acc, cur, idx, arr) => {
        const hasDups = arr.slice(idx + 1).some((it) => it === cur) || acc
        acc = hasDups || acc

        return acc
      }, false)

    return hasDuplicates ? { hasDuplicates: true } : null
  }
}
