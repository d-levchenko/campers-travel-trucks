import { getAllCampers } from '@/lib/api/campersApi';
import { Camper } from '@/types/campers';

import css from './FilterList.module.css';

const FilterList = async () => {
  const allLocations = await getAllCampers();
  const data = allLocations.campers.map((camper: Camper) => camper.location);
  const filteredData = data
    .filter((location: string) => location && location.trim() !== '')
    .filter((location: string, index: number) => {
      const normalizedCurrent = location.trim().toLowerCase();

      return (
        data.findIndex(
          (item: string) =>
            item && item.trim().toLowerCase() === normalizedCurrent,
        ) === index
      );
    });

  return (
    <div className="w-90">
      <form>
        <div className="flex flex-col gap-3">
          <label htmlFor="location">Location</label>

          <select name="location" id="location">
            {filteredData.map((location: string) => {
              const cleanLocation = location.trim();

              return (
                <option key={cleanLocation} value={cleanLocation}>
                  {cleanLocation}
                </option>
              );
            })}
          </select>
        </div>

        <h3>Filters</h3>

        <legend className={css.legend}>Camper form</legend>
        {filteredData.map((form: string) => {
          return (
            <label key={form} className="flex items-center gap-2">
              <input type="radio" name="form" value={form} />
              {form}
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default FilterList;
