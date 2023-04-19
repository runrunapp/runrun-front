import { LISTING_STATE } from '../gestion/gestion.models';
import {
  BathType,
  BedType,
  GarageCapacity,
  HouseType,
  OfficeLocation,
  PlanType,
} from '../publish/models/publish.models';

export interface HouseModel {
  houseType: HouseType | undefined;

  roomNumber: number;
  bathNumber: number;
  allowRunroomies: boolean;

  // Electrodomestics
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

  // Infraestructure
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

  allowPets: boolean;
}

export interface RoomModel {
  bedType: BedType | undefined;
  bathType: BathType | undefined;
  tv: boolean;
  hairDryer: boolean;
  table: boolean;
  airCondition: boolean;
  wifi: boolean;
  hotWater: boolean;
  fan: boolean;
  fridge: boolean;
  closet: boolean;
}

export interface OfficeModel {
  officeLocation: OfficeLocation | undefined;
  bathNumber: number;

  airCondition: boolean;
  parking: boolean;
  naturalLight: boolean;
  wifi: boolean;
  elevator: boolean;
  securitySystem: boolean;
  alarms: boolean;
  kitchen: boolean;
}
export interface LocalModel {
  localLocation: OfficeLocation | undefined;
  bathNumber: number;
  linealFrontSize: number;
  floorsNumber: number;
  lastActivity: string;

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
}

export interface GarageModel {
  garageCapacity: GarageCapacity | undefined;
  allowElectricMotorcycle: boolean | undefined;

  isCover: boolean;
  securitySystem: boolean;
  securityPersonal: boolean;
  alarms: boolean;
  automaticDoor: boolean;
}

export interface CommonModel {
  totalArea: number;
  price: number;
  currency: string;
  details: string;
  availableDate: Date;
  minStay: number;
  floorLevel: number;
}

export interface ListingImage {
  image: string;
}

export interface Listing
  extends CommonModel,
    HouseModel,
    RoomModel,
    OfficeModel,
    LocalModel,
    GarageModel {
  images: ListingImage[];
  id: number;
  propertyType: string;
  title: string;
  planType: PlanType;
  address: string;
  neighborhood: string;
  municipality: number;
  state: LISTING_STATE;

  locationLat: number;
  locationLng: number;

  floorLevelAccesible: boolean;
  entranceRamp: boolean;
  handicappedAccessible: boolean;

  cleanService: boolean;
  maintainerService: boolean;
  billPaymentService: boolean;
  transportationService: boolean;
}

export interface ListingReduced {
  title: string;
  id: number;
  price: number;
  image: string;
  currency: string;
}

export interface Collection {
  title: string;
  listings: ListingReduced[];
  order: number;
}
