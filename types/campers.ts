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
  // amenities: Amenities;
  coverImage: string;
  totalReviews: number;
}

// export interface Amenities {
//   ac: string;
//   bathroom: string;
//   kitchen: string;
//   tv: string;
//   radio: string;
//   refrigerator: string;
//   microwave: string;
//   gas: string;
//   water: string;
// }
