type Form = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';

type Transmission = 'automatic' | 'manual';

type Engine = 'diesel' | 'petrol' | 'hybrid' | 'electric';

export interface AllCampers {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  coverImage: string;
  totalReviews: number;
}

export interface FiltersResponse {
  forms: Form[];
  transmissions: Transmission[];
  engines: Engine[];
}
