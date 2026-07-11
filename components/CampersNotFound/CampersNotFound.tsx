'use client';

import Image from 'next/image';
import SvgIcon from '../SvgIcon/SvgIcon';
import { usePathname, useRouter } from 'next/navigation';
import { useFilters } from '../../providers/FilterProvider/FilterContext';

import css from './CampersNotFound.module.css';

const CampersNotFound = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { clearFilters } = useFilters();

  const handleClearAndSearch = () => {
    clearFilters();
    router.push(pathname);
  };

  return (
    <div className={css.container}>
      <Image
        src="/images/not-found.png"
        alt="Image not found"
        width={488}
        height={463}
        className={css.image}
        loading="eager"
      />

      <h2 className={css.title}>No campers found</h2>

      <p className={css.description}>
        We couldn`t find any campers that match your filters.
        <span>Try adjusting your search or clearing some filters.</span>
      </p>

      <div className="flex gap-4">
        <button
          className={css.clearBtn}
          type="button"
          onClick={handleClearAndSearch}>
          <SvgIcon name="close" width={24} height={24} />
          Clear filters
        </button>

        <button
          className={css.searchBtn}
          type="button"
          onClick={handleClearAndSearch}>
          View all campers
        </button>
      </div>
    </div>
  );
};

export default CampersNotFound;
