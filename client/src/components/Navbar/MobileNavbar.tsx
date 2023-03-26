import { GrCart } from 'react-icons/gr';
import {
  StoreLocation,
  Search,
  NavLogo,
  MobileNavButton,
  MobileNavItem,
} from '.';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useLayoutEffect, useRef, useState } from 'react';
import { FaPaw } from 'react-icons/fa';
import { BiChat } from 'react-icons/bi';
import gsap from 'gsap';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const MobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: {
            duration: 1,
          },
        })
        .to('#overlay--content', {
          x: 0,
          duration: 0.5,
        })
        .fromTo(
          '#overlay--bg',
          { opacity: 0 },
          { opacity: 0.6, duration: 0.2 },
          0.3
        )

        .pause();
    });
    return () => ctx.revert(); // cleanup
  }, []);

  const handleOpen = () => {
    setOpen(true);
    // show the menu
    if (!tl.current) return;
    tl.current.play();
  };

  const handleClose = () => {
    setOpen(false);

    // hide the mennu
    if (!tl.current) return;
    tl.current.reverse();
  };

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useLayoutEffect(() => {
    if (isDesktop) {
      handleClose();
    }
  }, [isDesktop]);
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
        className="h-[calc(100%-51.5px)] w-full absolute bottom-0 "
      >
        <div
          id="overlay--bg"
          className="h-full w-full bg-[#000] opacity-80 z-0 absolute"
          onClick={handleClose}
        ></div>
        <div
          id="overlay--content"
          className="h-full w-full md:w-[85%] bg-[#fffafa] z-10 absolute translate-x-[-100%]"
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
