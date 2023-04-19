import { PropertyType } from 'src/app/core/modules/publish/models/publish.models';
export const toCamel = (s: any) => {
  return s.replace(/([-_][a-z])/gi, ($1: any) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const isArray = function (a: any) {
  return Array.isArray(a);
};

const isObject = function (o: any) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

export const keysToCamel = function (o: any) {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return keysToCamel(i);
    });
  }

  return o;
};

export const urltoFile = function (dataurl: string, filename: string) {
  var arr = dataurl.split(',');
  var mime = 'image/png';
  if (arr.length > 1) {
    const mimeParsed = arr[0].match(/:(.*?);/);
    if (mimeParsed) {
      mime = mimeParsed[1];
    }
  }
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const propertyTypeDisplay = function (propertyType: PropertyType) {
  const propertyTypesDict = {
    [PropertyType.HOUSE]: 'Vivienda',
    [PropertyType.ROOM]: 'Habitación',
    [PropertyType.OFFICE]: 'Oficina',
    [PropertyType.LOCAL]: 'Local',
    [PropertyType.GARAGE]: 'Garage',
  };
  return propertyTypesDict[propertyType];
};
