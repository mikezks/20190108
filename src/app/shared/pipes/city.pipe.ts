import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: any, fmt: string): any {

    let short: string, long: string;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      default:
        short = long = value;
    }

    if (fmt === 'short') {
      return short;
    }

    return long;
  }
}
