import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormGroup, FormGroupDirective } from '@angular/forms'

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInfoComponent implements OnInit {
  form: FormGroup

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control
  }
}
