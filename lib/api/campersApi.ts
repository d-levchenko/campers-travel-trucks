import {
  AllCampers,
  BookingRequest,
  Camper,
  CamperDetails,
  FiltersResponse,
  ReviewsResponse,
} from '@/types/campers';

const BASE_URL = 'https://campers-api.goit.study';

interface FetchCampersArgs {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

interface BookingResponse {
  message: string;
}

export const getAllCampers = async ({
  page = 1,
  perPage = 5,
  location,
  form,
  transmission,
  engine,
}: FetchCampersArgs = {}): Promise<AllCampers> => {
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
  });

  if (location) params.append('location', location);
  if (form) params.append('form', form);
  if (transmission) params.append('transmission', transmission);
  if (engine) params.append('engine', engine);

  const res = await fetch(`${BASE_URL}/campers?${params.toString()}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch campers: ${res.statusText}`);
  }

  const result = await res.json();

  return result;
};

export const getCampersFilters = async (): Promise<FiltersResponse> => {
  const res = await fetch(`${BASE_URL}/campers/filters`);
  const result = await res.json();

  return result;
};

export const getCamperById = async (
  camperId: Camper['id'],
): Promise<CamperDetails> => {
  const res = await fetch(`${BASE_URL}/campers/${camperId}`);
  const result = await res.json();

  return result;
};

export const getReviewsByCamperId = async (
  camperId: Camper['id'],
): Promise<ReviewsResponse> => {
  const res = await fetch(`${BASE_URL}/campers/${camperId}/reviews`);
  const result = await res.json();

  return result;
};

export const sendBookingRequest = async (
  camperId: Camper['id'],
  booking: BookingRequest,
): Promise<BookingResponse> => {
  const res = await fetch(`${BASE_URL}/campers/${camperId}/booking-requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  });

  if (!res.ok) {
    throw new Error(`Failed to send booking request: ${res.status}`);
  }

  const data = await res.json();

  return data;
};
