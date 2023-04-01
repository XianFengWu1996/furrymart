import Image from 'next/image';
import { SectionTitle } from '../utils';

export const ShopByBrand = () => {
  return (
    <>
      <SectionTitle text="Shop By Brands" />

      <div className="w-full h-full flex overflow-x-scroll">
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
      </div>
    </>
  );
};

export const BrandItem = () => {
  return (
    <div className="h-40 w-40  relative rounded-full border border-purple-200 mr-10 cursor-pointer shrink-0 hover:bg-purple-50 transition-colors duration-300 ">
      <Image
        src={'/images/brands/purina.png'}
        alt={'image of the brand'}
        fill
        className="object-contain object-center px-2"
      />
    </div>
  );
};
