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
  description: string;
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

export interface CamperDetails {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: Amenities[];
  gallery: Gallery[];
  createdAt: string;
  updatedAt: string;

  statusCode: number;
}

export interface Gallery {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export type Amenities =
  | 'ac'
  | 'bathroom'
  | 'kitchen'
  | 'tv'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export type ReviewsResponse = Review[];

export interface BookingRequest {
  name: string;
  email: string;
}

export interface BookingResponse {
  message: string;
}
