import Link from 'next/link';
import { CSSProperties } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface NavItem {
  text: string;
  styles?: CSSProperties;
  href?: string;
}

export const MobileNavItem = (props: NavItem) => {
  return (
    <Link
      style={props.styles}
      href="#"
      className=" border-b-gray-200 border-b p-5 text-[0.95rem] font-bold hover:bg-gray-200 cursor-pointer flex items-center justify-between transition-all duration-500"
    >
      <p>{props.text}</p>
      <FaChevronRight />
    </Link>
  );
};

export const DesktopNavItem = (props: NavItem) => {
  return (
    <Link
      style={props.styles}
      href="#"
      className="h-full px-5 text-[0.95rem] font-bold text-white bg-inherit hover:bg-purple-800 cursor-pointer flex items-center justify-between transition-all duration-500"
    >
      <p>{props.text}</p>
    </Link>
  );
};
