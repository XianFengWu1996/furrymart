import Image from 'next/image';
import { SectionTitle } from '../utils';

const ShopByPet = () => {
  return (
    <div>
      <SectionTitle text="shop by pet" />

      <div className="w-full h-36 flex overflow-x-scroll">
        {Array(5)
          .fill(null)
          .map((i) => {
            return <ShopByPetItem key={i} />;
          })}
      </div>
    </div>
  );
};

const ShopByPetItem = () => {
  return (
    <div className="h-full w-40  relative rounded-md border border-purple-200 mr-10 cursor-pointer shrink-0">
      <div className="h-[80%] w-full bg-purple-300">
        <Image
          src="/images/pets/cavapoo.png"
          alt="image of cavapoo"
          fill
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShopByPet;
