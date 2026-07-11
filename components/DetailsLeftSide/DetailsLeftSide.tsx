'use client';

import Image from 'next/image';
import { CamperDetails } from '@/types/campers';
import useEmblaCarousel from 'embla-carousel-react';

import css from './DetailsLeftSide.module.css';
import { useEffect, useState } from 'react';

interface DetailsLeftSideProps {
  details: CamperDetails;
}

const DetailsLeftSide = ({ details }: DetailsLeftSideProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div className={css.embla} ref={emblaRef}>
        <div className={css.emblaContainer}>
          {details.gallery.map(item => (
            <div className={css.emblaSlide} key={item.id}>
              <Image
                src={item.original}
                alt={details.name}
                width={638}
                height={505}
                className={css.mainImage}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      <ul className={css.list}>
        {details.gallery.map((item, index) => (
          <li
            key={item.id}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`${css.item} ${
              index === selectedIndex ? css.active : ''
            }`}>
            <Image
              src={item.thumb}
              alt={details.name}
              width={135}
              height={144}
              className={css.images}
              loading="eager"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DetailsLeftSide;
