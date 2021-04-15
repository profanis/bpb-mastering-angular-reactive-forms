import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function exactCharacters(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlLength = control.value?.toString()?.length

    return controlLength === length
      ? null
      : {
          exactCharacters: {
            requiredLength: length,
            actualLength: controlLength,
          },
        }
  }
}
