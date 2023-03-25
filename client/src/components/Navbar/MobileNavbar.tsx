import { GrCart } from 'react-icons/gr';
import {
  StoreLocation,
  Search,
  MobileNavItem,
  MobileNavButton,
  NavLogo,
} from '.';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { FaPaw } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';
const MobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
    const nav = document.getElementById('nav--mobile');
    const overlay = document.getElementById('nav--overlay');
    if (!nav || !overlay) return;

    nav.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
    overlay.style.opacity = '0.8';
  };

  const handleClose = () => {
    setOpen(false);
    const nav = document.getElementById('nav--mobile');
    const overlay = document.getElementById('nav--overlay');
    if (!nav || !overlay) return;

    nav.style.transform = 'translateX(-100%)';
    overlay.style.opacity = '0';
    overlay.style.display = 'none';
  };

  return (
    <header className="border-b border-b-blue-100 h-36 w-full flex flex-col lg:hidden">
      <div
        className={`flex-grow flex justify-between items-center text-[#000] font-bold px-3 lg:px-32  ${
          open && 'border-b-gray-300 border-b '
        }`}
      >
        <div className="flex items-center">
          {open ? (
            <IoClose
              className="text-3xl cursor-pointer"
              onClick={handleClose}
            />
          ) : (
            <HiOutlineMenuAlt1
              className="text-3xl cursor-pointer"
              onClick={handleOpen}
            />
          )}

          <NavLogo />
        </div>

        <div className="mx-5">
          <GrCart className="text-2xl" />
        </div>
      </div>
      <Search />

      <StoreLocation />

      <div
        id="overlay--wrapper"
        className="h-[calc(100%-51.5px)] w-full absolute bottom-0 hidden"
      >
        <div
          id="nav--overlay"
          className="h-full w-full bg-[#000] opacity-80 z-0 absolute hidden"
        ></div>
        <div
          id="nav--mobile"
          className="h-full w-[85%] bg-[#fffafa] z-10 absolute transition-all duration-500 translate-x-[-100%]"
        >
          <MobileNavButton text="Sign In" Icon={FaPaw} />

          <nav className="flex flex-col">
            <MobileNavItem text="Today's Deal" />
            <MobileNavItem text="Our Picks" />
            <MobileNavItem text="Shop By Brand" />
            <MobileNavItem text="Shop By Pet" />
            <MobileNavItem text="Service" />
          </nav>

          <h4 className="my-10 text-center text-[1rem] font-extrabold text-red-500">
            Free Shipping Over $49
          </h4>

          <MobileNavButton text="24/7 Help" Icon={BiChat} />
        </div>
      </div>
    </header>
  );
};

export default MobileNavbar;
