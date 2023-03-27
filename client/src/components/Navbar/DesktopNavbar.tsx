import { GrCart } from 'react-icons/gr';
import { FaPaw } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';
import {
  StoreLocation,
  Search,
  StackNavButton,
  NavLogo,
  DesktopNavItem,
} from '.';
import { CartButton } from './NavButtons';

const DesktopNavbar = () => {
  return (
    <header className="border-b border-b-slate-300  w-full hidden lg:flex flex-col">
      <div className="h-20 flex-grow flex justify-between items-center text-[#000] font-bold px-3 lg:px-32 ">
        <NavLogo />

        <Search />

        <div className="hidden lg:flex items-center ">
          <StackNavButton Icon={FaPaw} text="Sign In" />
          <StackNavButton Icon={BiChat} text="24/7 Help" />
          <CartButton />
        </div>

        <GrCart className="text-2xl mx-5 lg:hidden" />
      </div>

      <div className="h-11 flex justify-between items-center px-32 bg-[#8504ED] text-[#F8F8FF] font-bold">
        <DesktopNavItem text="Today's Deal" />
        <DesktopNavItem text="Our Picks" />
        <DesktopNavItem text="Shop By Brand" />
        <DesktopNavItem text="Shop By Pet" />
        <DesktopNavItem text="Services" />

        <div className="text-[#6CED04]">Free Shipping Over $49</div>
      </div>
      <StoreLocation />
    </header>
  );
};

export default DesktopNavbar;
