import { AbstractControl, FormArray, ValidatorFn } from '@angular/forms'

export function noDuplicates(property: string): ValidatorFn {
  return (control: AbstractControl) => {
    const formArray = control as FormArray
    const hasDuplicates = formArray.value
      .map((it: any) => it[property])
      .reduce((acc: boolean, cur: any, idx: number, arr: any[]) => {
        const hasDups = arr.slice(idx + 1).some((it: any) => it === cur) || acc
        acc = hasDups || acc

        return acc
      }, false)

    return hasDuplicates ? { hasDuplicates: true } : null
  }
}
