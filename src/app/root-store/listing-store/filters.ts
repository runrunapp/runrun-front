import { PropertyType } from 'src/app/core/modules/publish/models/publish.models';
import { Listing } from 'src/app/core/modules/search/listing.models';
import { getPropertyTypeString } from 'src/globals';
import {
  HouseFilterModel,
  RoomFiltersModel,
  OfficeFiltersModel,
  LocalFiltersModel,
  GarageFiltersModel,
  Filters,
  CommonFiltersModel,
} from '../filters-store/models';

function filterBooleanField(field: string, filters: any | undefined) {
  return (listing: any) => {
    if (filters[field]) {
      return listing[field];
    }

    return true;
  };
}
function filterEqualField(field: string, filters: any | undefined) {
  return (listing: any) => {
    if (filters[field] !== null && filters[field] !== undefined) {
      return listing[field] === filters[field];
    }

    return true;
  };
}
function filterGreaterEqualField(field: string, filters: any | undefined) {
  return (listing: any) => {
    if (filters[field] !== null && filters[field] !== undefined) {
      return listing[field] >= filters[field];
    }

    return true;
  };
}
function filterLessEqualField(field: string, filters: any | undefined) {
  return (listing: any) => {
    if (filters[field] !== null && filters[field] !== undefined) {
      return filters[field] === 0 || listing[field] <= filters[field];
    }

    return true;
  };
}

function filterDateGreaterEqualField(field: string, filters: any | undefined) {
  return (listing: any) => {
    if (
      filters[field] !== null &&
      filters[field] !== undefined &&
      filters[field].lenght === 0
    ) {
      const propertyDate = new Date(listing[field]);
      const desireDate = new Date(filters[field]);

      return propertyDate.getTime() <= desireDate.getTime();
    }

    return true;
  };
}

function filterInRange(
  field: string,
  minVal: number | null | undefined,
  maxVal: number | null | undefined
) {
  return (listing: any) => {
    if (
      (minVal === null || minVal === undefined) &&
      maxVal !== null &&
      maxVal !== undefined
    ) {
      return listing[field] <= maxVal;
    }
    if (
      minVal !== null &&
      minVal !== undefined &&
      (maxVal === null || maxVal === undefined)
    ) {
      return listing[field] >= minVal;
    }
    if (
      minVal !== null &&
      minVal !== undefined &&
      maxVal !== null &&
      maxVal !== undefined
    ) {
      return listing[field] >= minVal && listing[field] <= maxVal;
    }

    return true;
  };
}

function availableVisitDays(has: boolean) {
  return (listing: any) => {
    if (has) {
      return listing.availableVisitDays.length > 0;
    }
    return true;
  };
}

const filterHouse = (
  listings: Listing[],
  filters: HouseFilterModel | undefined
) => {
  return listings;
  // .filter(filterGreaterEqualField('roomNumber', filters))
  // .filter(filterGreaterEqualField('bathNumber', filters))
  // .filter(filterEqualField('kitchenEquipped', filters))
  // .filter(filterEqualField('houseFurnished', filters))
  // .filter(filterEqualField('houseType', filters))
  // .filter(filterBooleanField('allowPets', filters))
  // .filter(filterBooleanField('parking', filters))
  // .filter(filterBooleanField('parking', filters))
  // .filter(filterBooleanField('bills', filters))
  // .filter(filterBooleanField('wifi', filters))
  // .filter(filterBooleanField('cleanService', filters))
  // .filter(filterBooleanField('mantainance', filters))
  // .filter(filterBooleanField('portman', filters))
  // .filter(filterBooleanField('pool', filters))
  // .filter(filterBooleanField('terrace', filters))
  // .filter(filterBooleanField('freeRoof', filters))
  // .filter(filterBooleanField('naturalLight', filters))
  // .filter(filterBooleanField('balcon', filters))
  // .filter(filterBooleanField('tv', filters))
  // .filter(filterBooleanField('airCondition', filters))
  // .filter(filterBooleanField('dishWasher', filters))
  // .filter(filterBooleanField('washingMachine', filters))
  // .filter(filterBooleanField('closet', filters))
  // .filter(filterBooleanField('garden', filters))
  // .filter(filterBooleanField('elevator', filters))
  // .filter(filterBooleanField('hotWater', filters));
};

const filterRoom = (
  listings: Listing[],
  filters: RoomFiltersModel | undefined
) => {
  return listings;
  // .filter(filterGreaterEqualField('roomNumber', filters))
  // .filter(filterGreaterEqualField('bathNumber', filters))
  // .filter(filterGreaterEqualField('housePopulation', filters))
  // .filter(filterBooleanField('roomFurnished', filters))
  // .filter(filterBooleanField('roomCloset', filters))
  // .filter(filterBooleanField('tv', filters))
  // .filter(filterBooleanField('kitchen', filters))
  // .filter(filterBooleanField('hairDryer', filters))
  // .filter(filterBooleanField('furnished', filters))
  // .filter(filterBooleanField('airCondition', filters))
  // .filter(filterBooleanField('dishWasher', filters))
  // .filter(filterBooleanField('wifi', filters))
  // .filter(filterBooleanField('washingMachine', filters))
  // .filter(filterBooleanField('closet', filters))
  // .filter(filterBooleanField('balcon', filters))
  // .filter(filterBooleanField('elevator', filters))
  // .filter(filterBooleanField('garden', filters))
  // .filter(filterBooleanField('naturalLight', filters))
  // .filter(filterBooleanField('hotWater', filters))
  // .filter(filterBooleanField('freeRoof', filters))
  // .filter(filterBooleanField('terrace', filters))
  // .filter(filterBooleanField('pool', filters))
  // .filter(filterBooleanField('portman', filters))
  // .filter(filterBooleanField('parking', filters))
  // .filter(filterEqualField('roomHouseType', filters))
  // .filter(filterEqualField('bedType', filters))
  // .filter(filterEqualField('bathType', filters))
  // .filter(filterEqualField('windowType', filters))
  // .filter(filterEqualField('allowCouples', filters))
  // .filter(filterEqualField('allowSmoking', filters))
  // .filter(filterEqualField('allowMinors', filters))
  // .filter(filterEqualField('personGender', filters))
  // .filter(filterEqualField('personOcupation', filters))
  // .filter(filterEqualField('ageRangeStart', filters))
  // .filter(filterEqualField('ageRangeEnd', filters));
};

const filterOffice = (
  listings: Listing[],
  filters: OfficeFiltersModel | undefined
) => {
  return listings;
  // .filter(filterEqualField('officeLocation', filters))
  // .filter(filterGreaterEqualField('bathNumber', filters))
  // .filter(filterBooleanField('airCondition', filters))
  // .filter(filterBooleanField('parking', filters))
  // .filter(filterBooleanField('naturalLight', filters))
  // .filter(filterBooleanField('wifi', filters))
  // .filter(filterBooleanField('elevator', filters))
  // .filter(filterBooleanField('securitySystem', filters))
  // .filter(filterBooleanField('alarms', filters))
  // .filter(filterBooleanField('kitchen', filters));
};

const filterLocal = (
  listings: Listing[],
  filters: LocalFiltersModel | undefined
) => {
  return listings;
  // .filter(filterEqualField('localLocation', filters))
  // .filter(filterGreaterEqualField('bathNumber', filters))
  // .filter(filterGreaterEqualField('linealFrontSize', filters))
  // .filter(filterGreaterEqualField('floorsNumber', filters))
  // .filter(filterBooleanField('airCondition', filters))
  // .filter(filterBooleanField('corner', filters))
  // .filter(filterBooleanField('parking', filters))
  // .filter(filterBooleanField('naturalLight', filters))
  // .filter(filterBooleanField('elevator', filters))
  // .filter(filterBooleanField('securitySystem', filters))
  // .filter(filterBooleanField('securityPersonal', filters))
  // .filter(filterBooleanField('alarms', filters))
  // .filter(filterBooleanField('extractor', filters))
  // .filter(filterBooleanField('kitchen', filters));
};

const filterGarage = (
  listings: Listing[],
  filters: GarageFiltersModel | undefined
) => {
  return listings;
  // .filter(filterEqualField('garageCapacity', filters))
  // .filter(filterEqualField('allowElectricMotorcycle', filters))
  // .filter(filterBooleanField('isCover', filters))
  // .filter(filterBooleanField('securitySystem', filters))
  // .filter(filterBooleanField('securityPersonal', filters))
  // .filter(filterBooleanField('alarms', filters))
  // .filter(filterBooleanField('automaticDoor', filters));
};

const filterCommon = (
  listings: Listing[],
  filters: CommonFiltersModel | undefined
) => {
  return listings
    .filter(filterEqualField('currency', filters))
    .filter(filterDateGreaterEqualField('availableDay', filters))
    .filter(filterInRange('price', filters?.minPrice, filters?.maxPrice))
    .filter(
      filterInRange('totalArea', filters?.minTotalArea, filters?.maxTotalArea)
    )
    .filter(filterInRange('minStay', filters?.minStay, filters?.maxStay));
};

export const filterPropertyType = (
  listings: Listing[],
  propertyType: PropertyType
) =>
  listings.filter(
    (listing) => listing.propertyType === getPropertyTypeString(propertyType)
  );

export const filterDict = {
  house: filterHouse,
  room: filterRoom,
  office: filterOffice,
  local: filterLocal,
  garage: filterGarage,
};

export const filterListings = (listings: Listing[], filters: Filters) => {
  let filteredListings = filterPropertyType(listings, filters.propertyType);
  filteredListings = filterCommon(filteredListings, filters.common);
  switch (filters.propertyType) {
    case PropertyType.HOUSE:
      return filterHouse(filteredListings, filters.house);
    case PropertyType.ROOM:
      return filterRoom(filteredListings, filters.room);
    case PropertyType.OFFICE:
      return filterOffice(filteredListings, filters.office);
    case PropertyType.LOCAL:
      return filterLocal(filteredListings, filters.local);
    case PropertyType.GARAGE:
      return filterGarage(filteredListings, filters.garage);
  }
};
