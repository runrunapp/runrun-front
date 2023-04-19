import { PropertyType } from './app/core/modules/publish/models/publish.models';

export function setObjPath(obj: any, path: string, value: any): void {
  let parts = path.split('.'),
    part;

  function error(txt: string) {
    throw new TypeError(txt);
  }

  while ((part = parts.shift())) {
    if (parts.length) {
      obj =
        part in obj && obj[part] instanceof Object
          ? obj[part]
          : part in obj
          ? error('key [' + part + '] exists but is not an object')
          : ((obj[part] = {}), obj[part]);
    } else {
      if (value === undefined) {
        value = null;
      }
      obj[part] = value;
    }
  }
}

export function getPropertyTypeString(
  propertyType: PropertyType
): string | string | string | string | string {
  switch (propertyType) {
    case PropertyType.HOUSE:
      return 'house';

    case PropertyType.ROOM:
      return 'room';

    case PropertyType.OFFICE:
      return 'office';

    case PropertyType.LOCAL:
      return 'local';

    case PropertyType.GARAGE:
      return 'garage';
    default:
      return 'house';
  }
}
