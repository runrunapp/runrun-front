export interface Location {
  lat: number;
  lon: number;
}

export enum PlanType {
  GESTION,
  RUNRUNPLUS,
  GRATIS,
}
export enum PropertyType {
  HOUSE = 'house',
  ROOM = 'room',
  OFFICE = 'office',
  LOCAL = 'local',
  GARAGE = 'garage',
}

export enum HouseType {
  INDEPENDIENT,
  APARTAMENT,
  DUPLEX,
  CORRIDOR,
  STUDIO,
}

export enum RoomHouseType {
  HOUSE,
  APARTAMENT,
}

export enum BedType {
  SINGLE,
  DOUBLE,
  TWO,
  NO,
}

export enum BathType {
  PRIVED,
  SHARED,
}

export enum WindowType {
  CORRIDO,
  STREET,
  BACKYARD,
  NO,
}

export enum Gender {
  MAN,
  WOMAN,
  NOBINARY,
  ANY,
}

export enum Ocupation {
  WORKER,
  STUDENT,
}

export enum OfficeLocation {
  STREET,
  INTERIOR,
}

export enum GarageCapacity {
  SMALL_CAR,
  MEDIUM_CAR,
  BIG_CAR,
}

export interface PublicationHouseModel {
  houseType: HouseType | undefined;

  roomNumber: number;
  bathNumber: number;
  allowRunroomies: boolean;

  electrodomestic: {
    airCondition: boolean;
    bed: boolean;
    closet: boolean;
    gasCooker: boolean;
    electricCooker: boolean;
    kitchenEquipment: boolean;
    microwave: boolean;
    refrigerator: boolean;
    phone: boolean;
    tv: boolean;
    dishes: boolean;
    wifi: boolean;
    fan: boolean;
    washingMachine: boolean;
  };
  infrastructure: {
    hotWater: boolean;
    freeRoof: boolean;
    balcon: boolean;
    tank: boolean;
    elevator: boolean;
    independantEntrance: boolean;
    liquidGas: boolean;
    manufacturedGas: boolean;
    garden: boolean;
    independantTank: boolean;
    pool: boolean;
    portman: boolean;
    parking: boolean;
  };
  allowPets: boolean;
}

export interface PublicationRoomModel {
  bedType: BedType | undefined;
  bathType: BathType | undefined;

  comodities: {
    tv: boolean;
    hairDryer: boolean;
    table: boolean;
    airCondition: boolean;
    wifi: boolean;
    hotWater: boolean;
    fan: boolean;
    fridge: boolean;
    closet: boolean;
  };
}
export interface PublicationOfficeModel {
  officeLocation: OfficeLocation | undefined;
  bathNumber: number;

  others: {
    airCondition: boolean;
    parking: boolean;
    naturalLight: boolean;
    wifi: boolean;
    elevator: boolean;
    securitySystem: boolean;
    alarms: boolean;
    kitchen: boolean;
  };
}
export interface PublicationLocalModel {
  localLocation: OfficeLocation | undefined;
  bathNumber: number;
  linealFrontSize: number;
  floorsNumber: number;
  lastActivity: string;
  others: {
    airCondition: boolean;
    corner: boolean;
    parking: boolean;
    naturalLight: boolean;
    elevator: boolean;
    securitySystem: boolean;
    securityPersonal: boolean;
    alarms: boolean;
    extractor: boolean;
    kitchen: boolean;
  };
}

export interface PublicationGarageModel {
  garageCapacity: GarageCapacity | undefined;
  allowElectricMotorcycle: boolean | undefined;

  others: {
    isCover: boolean;
    securitySystem: boolean;
    securityPersonal: boolean;
    alarms: boolean;
    automaticDoor: boolean;
  };
}

export interface PublicationBasicModel {
  planType: PlanType | undefined;
  propertyType: PropertyType;
  location: Location;
  municipality: number;
  address: string;
  floorLevel: number | undefined;
  neighborhood: string;
  totalArea: number | undefined;
  price: number | undefined;
  currency: 'CUP' | 'MLC' | 'USD' | 'EUR';
  minStay: number | undefined;
  images: { image: string }[];
}

export interface PublicationCommonModel {
  details: string;
  floorLevelAccesible: boolean;
  entranceRamp: boolean;
  handicappedAccessible: boolean;
}
export interface PublicationModel {
  basic: PublicationBasicModel | undefined;
  house: PublicationHouseModel | undefined;
  room: PublicationRoomModel | undefined;
  office: PublicationOfficeModel | undefined;
  local: PublicationLocalModel | undefined;
  garage: PublicationGarageModel | undefined;
  common: PublicationCommonModel | undefined;
}
