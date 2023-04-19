import { Cite } from '../../models/cite.models';
import { UserReduced } from '../authentication/authentication.models';
import { PlanType, PropertyType } from '../publish/models/publish.models';

export interface Receipt {
  amount: number;
  file: string;
  createdAt: Date;
  user: number;
  description: string;
  currency: string;
}

export enum LISTING_STATE {
  LIBRE = 0,
  OCUPADO = 1,
  NO_DISPONIBLE = 2,
}

export interface ListingManager {
  declaracionJuradaManagement: boolean;
  listing: number;
  listingName: string;
  occupant: UserReduced | null;
  paymentDay: number | null;
  receipts: Receipt[];
  servicesManagement: boolean;
  state: LISTING_STATE;
  taxManagement: boolean;
  planType: PlanType;
  image: string;
  visitRequests: Cite[];
  propertyType: PropertyType;
  owner: UserReduced;
  currentBooking: {
    busyEnd: Date | null;
    busyStart: Date | null;
    paymentDay: number | null;
    user: UserReduced | null;
  };
}

export interface ListingDocument {
  id: number;
  creationDate: Date;
  title: string;
  document: string;
  type: string;
}

export interface TenantManager {
  id: number;
  listing: number;
  user: number;
  paymentDay: number;
  busyStart: Date;
  busyEnd: Date;
  isPlus: boolean;
  image: string;
  propertyType: PropertyType;
  propertyTitle: string;
  totalMonths: number;
  currentMonths: number;
  completed: boolean;
  manager: UserReduced;
}

export interface Incidence {
  id: number;
  listing: number;
  user: number;
  description: string;
  createdAt: Date;
  solved: boolean;
  solvedAt: Date;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}
