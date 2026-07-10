const BASE_URL = 'https://campers-api.goit.study';

export const getAllCampers = async () => {
  const res = await fetch(`${BASE_URL}/campers`);
  const result = await res.json();

  return result;
};

export const getCampersFilters = async () => {
  const res = await fetch(`${BASE_URL}/campers/filters`);
  const result = await res.json();

  return result;
};
