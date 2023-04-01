import Image from 'next/image';
import { SectionTitle } from '../utils';

const PetData = [
  {
    id: '1',
    name: 'dog',
    src: '/images/pets/cavapoo.png',
    alt: 'image of dog',
  },
  {
    id: '2',
    name: 'cat',
    src: '/images/pets/cat.png',
    alt: 'image of cat',
  },
  {
    id: '3',
    name: 'dog',
    src: '/images/pets/cavapoo.png',
    alt: 'image of dog',
  },
  {
    id: '4',
    name: 'dog',
    src: '/images/pets/cavapoo.png',
    alt: 'image of dog',
  },
];

export const ShopByPet = () => {
  return (
    <div>
      <SectionTitle text="shop by pet" />

      <div className="w-full h-36 flex overflow-x-scroll">
        {PetData.map((data) => {
          return <ShopByPetItem key={data.id} src={data.src} alt={data.alt} />;
        })}
      </div>
    </div>
  );
};

interface ShopByPetItem {
  src: string;
  alt: string;
}

export const ShopByPetItem = ({ src, alt }: ShopByPetItem) => {
  return (
    <div className="h-full w-40  relative rounded-md border border-purple-200 mr-10 cursor-pointer shrink-0">
      <div className="h-[80%] w-full bg-purple-300">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
};
