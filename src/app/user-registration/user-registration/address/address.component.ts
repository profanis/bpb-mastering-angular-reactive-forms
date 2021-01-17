import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent implements OnInit {
  form: FormGroup

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control
  }
}
