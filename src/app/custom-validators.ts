import { FormArray, ValidatorFn } from '@angular/forms'

export function noDuplicates(property): ValidatorFn {
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
