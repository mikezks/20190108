import { AbstractControl } from '@angular/forms';

export function validateRxCity(c: AbstractControl): object {
    const validCities: string[] = [
      'Graz',
      'Hamburg',
      'Frankfurt',
      'Wien'
    ];

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

export function validateRxCityWithParams(validCities: string[]) {
    return function(c: AbstractControl): object {
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
