import { CSSProperties } from 'react';
import { IconType } from 'react-icons';
import { BiConfused } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';

interface NavButton {
  Icon?: IconType;
  text: string;
  styles?: CSSProperties;
}

export const NavLogo = () => {
  return (
    <div className="text-2xl font-extrabold mx-5 lg:mx-0">
      <span className="text-[#8504ED]">Furry</span>Mart
    </div>
  );
};

export const MobileNavButton = ({
  Icon = BiConfused,
  text,
  styles,
}: NavButton) => {
  return (
    <div
      role={'button'}
      className="flex items-center justify-center mt-10 mb-5"
    >
      <button
        type="button"
        className="py-2 border-[#8504ED] border-[2px] rounded-lg flex items-center min-w-[13rem] justify-center text-[0.85rem] font-bold"
        style={styles}
      >
        <Icon className="mr-3 text-[1rem] font-bold" />
        {text}
      </button>
    </div>
  );
};

export const StackNavButton = ({
  Icon = BiConfused,
  text,
  styles,
}: NavButton) => {
  return (
    <button
      className="mx-5 flex-col items-center hidden lg:flex hover:bg-purple-100 p-3 rounded-lg transition-all duration-500"
      style={styles}
    >
      <Icon className="text-2xl" />
      <p className="text-xs">{text}</p>
    </button>
  );
};

export const CartButton = () => {
  return (
    <button className="hover:bg-purple-100 p-2 rounded-full transition-all duration-500 relative">
      <GrCart className="text-[1.75rem] mx-5" />
      <span className="absolute top-0 right-[25%] text-[0.5rem] bg-[#8504ED] rounded-full text-white min-h-[0.75rem]  min-w-[0.75rem] px-[0.4rem] py-[0.2rem]">
        0
      </span>
    </button>
  );
};
