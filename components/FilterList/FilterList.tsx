import { getCampersFilters } from '@/lib/api/campersApi';
import { FiltersResponse } from '@/types/campers';
import FilterForm from './FilterForm/FilterForm';

const FilterList = async () => {
  const data: FiltersResponse = await getCampersFilters();

  return <FilterForm data={data} />;
};

export default FilterList;
