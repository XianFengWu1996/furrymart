import { GrCart } from 'react-icons/gr';
import { FaPaw } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';
import { StoreLocation, Search } from '.';

const DesktopNavbar = () => {
  return (
    <header className="border-b border-b-slate-300  w-full hidden lg:flex flex-col">
      <div className="h-20 flex-grow flex justify-between items-center text-[#000] font-bold px-3 lg:px-32 ">
        <div className="text-2xl font-extrabold">
          <span className="text-[#8504ED]">Furry</span>Mart
        </div>

        <Search />

        <div className="flex items-center">
          <div className="mx-5  flex-col items-center hidden lg:flex">
            <FaPaw className="text-2xl" />
            <p className="text-xs">Sign In</p>
          </div>

          <div className="mx-5 flex-col items-center hidden lg:flex">
            <BiChat className="text-2xl" />
            <p className="text-xs">24/7 Help</p>
          </div>

          <div className="mx-5">
            <GrCart className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="h-11 flex justify-between items-center px-32 bg-[#8504ED] text-[#F8F8FF] font-bold">
        <div>Today&apos;s Deal</div>
        <div>Our Picks</div>

        <div>Shop by Pet</div>
        <div>Shop by Brand</div>
        <div>Services</div>

        <div className="text-[#6CED04]">Free Shipping Over $49</div>
      </div>
      <StoreLocation />
    </header>
  );
};

export default DesktopNavbar;
