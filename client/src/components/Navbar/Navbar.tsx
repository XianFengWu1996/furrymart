import { Fragment } from 'react';
import { DesktopNavbar, MobileNavbar } from '.';

const Navbar = () => {
  return (
    <Fragment>
      <DesktopNavbar />

      <MobileNavbar />
    </Fragment>
  );
};

export default Navbar;
