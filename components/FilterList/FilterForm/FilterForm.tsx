'use client';

import { FiltersResponse } from '@/types/campers';
import SvgIcon from '@/components/SvgIcon/SvgIcon';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import css from './FilterForm.module.css';

interface FilterFormProps {
  data: FiltersResponse;
}

const FilterForm = ({ data }: FilterFormProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const reset = () => formRef.current?.reset();

    window.addEventListener('reset-filters', reset);

    return () => {
      window.removeEventListener('reset-filters', reset);
    };
  }, []);

  const handleClear = () => {
    formRef.current?.reset();
    router.push(pathname);
  };

  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const params = new URLSearchParams();

    const location = formData.get('location')?.toString();
    const form = formData.get('form')?.toString();
    const engine = formData.get('engine')?.toString();
    const transmission = formData.get('transmission')?.toString();

    if (location) params.set('location', location);
    if (form) params.set('form', form);
    if (engine) params.set('engine', engine);
    if (transmission) params.set('transmission', transmission);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className="rounded-[20px] bg-(--inputs) p-6 self-start">
      <form ref={formRef} onSubmit={handleSearch}>
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
                  defaultChecked={searchParams.get('engine') === item}
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
