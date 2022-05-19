import type { FC } from 'react';

import DesktopNavBar from './components/DesktopNavBar';
import MobileNavBar from './components/MobileNavBar';

const NavBar: FC = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  );
};

export default NavBar;
