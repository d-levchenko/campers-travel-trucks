'use client';

import { FiltersResponse } from '@/types/campers';
import SvgIcon from '@/components/SvgIcon/SvgIcon';
import { usePathname, useRouter } from 'next/navigation';
import formatStringInTitleCase from '@/utils/formatStringInTitleCase';
import { useFilters } from '@/providers/FilterProvider/FilterContext';

import css from './FilterForm.module.css';

interface FilterFormProps {
  data: FiltersResponse;
}

const FilterForm = ({ data }: FilterFormProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const { filters, setFilters, clearFilters } = useFilters();

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      location: e.target.value,
    }));
  };

  const handleCamperFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      form: e.target.value,
    }));
  };

  const handleEngineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      engine: e.target.value,
    }));
  };

  const handleTransmissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      transmission: e.target.value,
    }));
  };

  const handleClear = () => {
    clearFilters();
    router.push(pathname);
  };

  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    router.push(`${pathname}?${params}`);
  };

  return (
    <aside className="rounded-[20px] bg-(--inputs) p-6 self-start">
      <form onSubmit={handleSearch}>
        <div className="flex flex-col gap-3">
          <label className={css.locationLabel} htmlFor="location">
            Location
          </label>

          <div className={css.locationWrapper}>
            <SvgIcon
              name="location"
              width={20}
              height={20}
              className={`${css.locationIcon} ${
                filters.location ? css.active : ''
              }`}
            />

            <input
              type="text"
              name="location"
              id="location"
              value={filters.location}
              onChange={handleLocationChange}
              className={css.locSelect}
              placeholder="City"
            />
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
                  checked={filters.form === item}
                  onChange={handleCamperFormChange}
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

                <span>{formatStringInTitleCase(item)}</span>
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
                  checked={filters.engine === item}
                  onChange={handleEngineChange}
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
                  checked={filters.transmission === item}
                  onChange={handleTransmissionChange}
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
          <button className={css.searchBtn} type="submit">
            Search
          </button>
          <button className={css.clearBtn} type="button" onClick={handleClear}>
            <SvgIcon name="close" width={24} height={24} />
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
};

export default FilterForm;
