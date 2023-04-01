import Link from 'next/link';
import { CSSProperties } from 'react';

interface TitleProps {
  text: string;
  styles?: CSSProperties;
}

interface TitleWithLinkProps extends TitleProps {
  href?: string;
  linkLabel: string;
  linkStyle?: CSSProperties;
}

export const SectionTitle = (props: TitleProps) => {
  return (
    <h2
      className="font-extrabold text-[1.25rem] tracking-wide mt-10 mb-3 capitalize"
      style={props.styles}
    >
      {props.text}
    </h2>
  );
};

export const SectionTitleWithLink = ({
  styles,
  text,
  href = '#',
  linkLabel,
  linkStyle,
}: TitleWithLinkProps) => {
  return (
    <>
      <h2
        className="font-extrabold text-[1.25rem] tracking-wide mt-10  capitalize"
        style={styles}
      >
        {text}
      </h2>
      <Link
        href={href}
        className="text-[0.65rem] text-sky-500 capitalize"
        style={linkStyle}
      >
        {linkLabel}
      </Link>
    </>
  );
};
