import { City, State } from 'src/app/root-store/address-store/address.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state-to-option',
})
export class StateToOptionPipe implements PipeTransform {
  transform(value: State[], args?: any): any {
    return value.map((state) => ({ value: state, label: state.name }));
  }
}

@Pipe({
  name: 'city-to-option',
})
export class CityToOptionPipe implements PipeTransform {
  transform(value: City[], args?: any): any {
    return value.map((city) => ({ value: city.id, label: city.name }));
  }
}
