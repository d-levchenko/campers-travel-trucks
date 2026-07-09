import { getAllCampers } from '@/lib/api/campersApi';
import type { Camper } from '@/types/campers';
import Image from 'next/image';

const CamperList = async () => {
  const allCampers = await getAllCampers();
  const data = allCampers.campers;

  return (
    <ul>
      {data.map((camper: Camper) => (
        <li key={camper.id}>
          <Image
            src={camper.coverImage}
            alt={camper.name}
            width={200}
            height={200}
          />
          <p>{camper.name}</p>
          <p>{camper.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
