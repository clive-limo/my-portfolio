import type { FC } from 'react';
import { useState } from 'react';

import HamburgerMenu from './components/HamburgerMenu';

interface IProps {}

const MobileNavBar: FC<IProps> = () => {
  const [isHamburgerOpen, setHamburgerStatus] = useState<boolean>(false);
  return (
    <>
      <header className="flex md:hidden">
        <img
          alt="Logo"
          src="/assets/images/logo.png"
          className="h-[100px] object-contain"
        />
        <span className="flex-[5]" />
        <button onClick={() => setHamburgerStatus(!isHamburgerOpen)}>
          <img
            className="m-3 h-[50px] w-[50px]"
            alt="hamburger-icon"
            src="/assets/icons/ic_hamburger.svg"
          />
        </button>
        <span className="w-[20px]" />
      </header>
      <HamburgerMenu
        isOpen={isHamburgerOpen}
        close={() => setHamburgerStatus(!isHamburgerOpen)}
      />
    </>
  );
};
export default MobileNavBar;
