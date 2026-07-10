const BASE_URL = 'https://campers-api.goit.study';

interface FetchCampersArgs {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

export const getAllCampers = async ({
  page = 1,
  perPage = 5,
  location,
  form,
  transmission,
  engine,
}: FetchCampersArgs = {}) => {
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

export const getCampersFilters = async () => {
  const res = await fetch(`${BASE_URL}/campers/filters`);
  const result = await res.json();

  return result;
};
