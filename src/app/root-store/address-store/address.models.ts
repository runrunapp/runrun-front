export interface City {
  id: number;
  name: string;
}

export interface State {
  id: number;
  country: string;
  name: string;
  cities: City[];
}
