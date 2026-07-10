import { getCampersFilters } from '@/lib/api/campersApi';
import SvgIcon from '../SvgIcon/SvgIcon';
import { FiltersResponse } from '@/types/campers';

import css from './FilterList.module.css';

const FilterList = async () => {
  const data: FiltersResponse = await getCampersFilters();

  console.log(data);

  return (
    <aside className="rounded-[20px] bg-(--inputs) p-6 self-start">
      <form>
        <div className="flex flex-col gap-3">
          <label className={css.locationLabel} htmlFor="location">
            Location
          </label>

          <div className="relative">
            <SvgIcon
              name="location"
              width={20}
              height={20}
              className="fill-(--main) absolute top-4.5 left-5 flex justify-center items-center"
            />
            <label htmlFor="location">
              <input
                type="text"
                name="location"
                id="location"
                className={css.locSelect}
                placeholder="Enter your location"
              />
            </label>
          </div>
        </div>

        <h3 className={css.filtersText}>Filters</h3>

        <div className="flex gap-6 flex-col mb-12">
          <fieldset>
            <legend className={css.legend}>Camper form</legend>

            {data.forms.map(item => (
              <label key={item} className={css.labelRadio}>
                <input
                  type="radio"
                  name="form"
                  value={item}
                  className={css.radio}
                />

                <span className={css.iconWrapper}>
                  <SvgIcon
                    className={css.circle}
                    name="circle"
                    width={24}
                    height={24}
                  />
                  <SvgIcon
                    className={css.dot}
                    name="dot"
                    width={14}
                    height={14}
                  />
                </span>

                <span>
                  {item
                    .split('_')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </span>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend className={css.legend}>Engine</legend>

            {data.engines.map(item => (
              <label key={item} className={css.labelRadio}>
                <input
                  type="radio"
                  name="engine"
                  value={item}
                  className={css.radio}
                />

                <span className={css.iconWrapper}>
                  <SvgIcon
                    className={css.circle}
                    name="circle"
                    width={24}
                    height={24}
                  />
                  <SvgIcon
                    className={css.dot}
                    name="dot"
                    width={14}
                    height={14}
                  />
                </span>

                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend className={css.legend}>Transmission</legend>

            {data.transmissions.map(item => (
              <label key={item} className={css.labelRadio}>
                <input
                  type="radio"
                  name="transmission"
                  value={item}
                  className={css.radio}
                />

                <span className={css.iconWrapper}>
                  <SvgIcon
                    className={css.circle}
                    name="circle"
                    width={24}
                    height={24}
                  />
                  <SvgIcon
                    className={css.dot}
                    name="dot"
                    width={14}
                    height={14}
                  />
                </span>

                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </label>
            ))}
          </fieldset>
        </div>

        <div className="flex flex-col gap-4">
          <button className={css.searchBtn}>Search</button>
          <button className={css.clearBtn}>
            <SvgIcon name="close" width={24} height={24} />
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
};

export default FilterList;
