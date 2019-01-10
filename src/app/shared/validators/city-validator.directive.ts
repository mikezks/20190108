import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {
  @Input() city: string;

  validate(c: AbstractControl): object {
    /* const validCities: string[] = [
      'Graz',
      'Hamburg',
      'Frankfurt',
      'Wien'
    ]; */

    const validCities = this.city.split(',');

    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities
        }
      };
    }
    return {};
  }

}
