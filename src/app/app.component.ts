import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  colors = [
    { key: 1, value: 'Red' },
    { key: 2, value: 'Green' },
    { key: 3, value: 'Blue' },
  ]

  myColor = new FormControl(this.colors[1])

  compareFn(optionOne, optionTwo) {
    return optionOne && optionTwo && optionOne.key === optionTwo.key
  }
}
