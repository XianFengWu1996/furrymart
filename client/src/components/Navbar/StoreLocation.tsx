import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';

const StoreLocation = () => {
  return (
    <div className="h-8 lg:h-11 px-2 lg:px-32 flex items-center">
      <div className="flex items-center mr-8">
        <HiOutlineLocationMarker className="text-lg mr-1 font-bold" />
        <div className="flex text-[0.8rem] font-extrabold capitalize">
          <p>Nearest Store:</p>
          <p className="underline cursor-pointer text-[#8504ED] ml-1">02121</p>
        </div>
      </div>

      <div className="flex items-center">
        <TbTruckDelivery className="text-lg mr-1 font-bold" />
        <div className="flex text-[0.8rem] font-extrabold capitalize">
          <p>Delivering To:</p>
          <p className="underline cursor-pointer text-[#8504ED] ml-1">02190</p>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
