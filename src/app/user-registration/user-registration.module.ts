import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AddressComponent } from './user-registration/address/address.component'
import { BasicInfoComponent } from './user-registration/basic-info/basic-info.component'
import { UserRegistrationComponent } from './user-registration/user-registration.component'

@NgModule({
  declarations: [
    BasicInfoComponent,
    AddressComponent,
    UserRegistrationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UserRegistrationComponent],
})
export class UserRegistrationModule {}
