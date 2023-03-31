import Link from 'next/link';
import { CSSProperties } from 'react';

interface TitleProps {
  text: string;
  styles?: CSSProperties;
}

export const SectionTitle = (props: TitleProps) => {
  return (
    <h2
      className="font-extrabold text-[1.25rem] tracking-wide mt-5 mb-1 capitalize"
      style={props.styles}
    >
      {props.text}
    </h2>
  );
};

export const SectionTitleWithLink = (props: TitleProps) => {
  return (
    <h2
      className="font-extrabold text-[1.25rem] tracking-wide mt-5 mb-1 capitalize"
      style={props.styles}
    >
      {props.text}
      <Link href={'#'} className="text-[0.65rem] text-sky-500">
        Show All
      </Link>
    </h2>
  );
};
