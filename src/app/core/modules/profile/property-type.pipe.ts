import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../authentication/authentication.models';
import { PropertyType } from '../publish/models/publish.models';

interface IDictionary<TValue> {
  [id: string]: TValue;
}

@Pipe({
  name: 'propertyType',
})
export class PropertyTypePipe implements PipeTransform {
  transform(value: string): PropertyType {
    const conversionDict: IDictionary<PropertyType> = {
      house: PropertyType.HOUSE,
      room: PropertyType.ROOM,
      office: PropertyType.OFFICE,
      local: PropertyType.LOCAL,
      garage: PropertyType.GARAGE,
    };

    return conversionDict[value];
  }
}
