import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import HamburgerButton from '../HamburgerButton';

interface IProps {
  isOpen: boolean;
  close: () => void;
}
const HamburgerMenu: FC<IProps> = ({ isOpen, close }) => {
  const router = useRouter();
  return (
    <section
      className={clsx(
        'fixed overflow-hidden inset-0 z-10 h-full w-full bg-dark-primary',
        isOpen ? 'flex' : 'hidden'
      )}
    >
      <button
        onClick={close}
        className="absolute right-[20px] top-[20px] h-[50px] w-[50px]"
      >
        <img alt="close-btn" src="/assets/icons/ic_close.svg" />
      </button>
      <div className="mx-auto mb-6 mt-[25vh] flex flex-col">
        <HamburgerButton
          path="/"
          close={close}
          title="HOME"
          active={router.pathname === '/'}
        />
        <HamburgerButton
          path="/about"
          close={close}
          title="ABOUT"
          active={router.pathname === '/about'}
        />
        <HamburgerButton
          path="/forHire"
          close={close}
          title="HIRE ME"
          active={router.pathname === '/forHire'}
        />
        <HamburgerButton
          path="/contact"
          close={close}
          title="CONTACT"
          active={router.pathname === '/contact'}
        />
      </div>
      <img alt= 'tree-bg' src='/assets/images/tree.svg' className='absolute bottom-0 right-0 h-[200px] w-[200px] '/>
    </section>
  );
};

export default HamburgerMenu;
