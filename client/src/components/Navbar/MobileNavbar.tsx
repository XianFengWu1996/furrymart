import { GrCart } from 'react-icons/gr';
import { BiMenu } from 'react-icons/bi';
import { StoreLocation, Search } from '.';
const MobileNavbar = () => {
  return (
    <header className="border-b border-b-blue-100 h-36 w-full flex flex-col lg:hidden">
      <div className=" flex-grow flex justify-between items-center text-[#000] font-bold px-3 lg:px-32 ">
        <div className="flex items-center">
          <BiMenu className="text-3xl" />

          <div className="text-2xl font-extrabold mx-5">
            <span className="text-[#8504ED]">Furry</span>Mart
          </div>
        </div>

        <div className="mx-5">
          <GrCart className="text-2xl" />
        </div>
      </div>
      <Search />

      <StoreLocation />
    </header>
  );
};

export default MobileNavbar;
