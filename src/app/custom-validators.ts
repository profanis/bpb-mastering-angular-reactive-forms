import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function exactCharacters(length: number): ValidatorFn {
  return (control: FormControl): ValidationErrors | null => {
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
