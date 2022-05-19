import { useRouter } from 'next/router';
import type { FC } from 'react';

import NavButton from './components/NavButton';

const DesktopNavBar: FC = () => {
  const router = useRouter();

  return (
    <header className="hidden md:flex ">
      <img
        alt="Logo"
        src="/assets/images/logo.png"
        className="h-[100px] object-contain"
      />
      <span className="flex-[6]" />
      <NavButton path="/" title="HOME" active={router.pathname === '/'} />
      <NavButton
        path="/about"
        title="ABOUT"
        active={router.pathname === '/about'}
      />
      <NavButton
        path="/forHire"
        title="HIRE ME"
        active={router.pathname === '/forHire'}
      />
      <span className="flex-[1]" />
      <button className="self-center rounded-3xl bg-dark-secondary ">
        <p className="px-10 py-3 text-white">Contact Me</p>
      </button>
      <span className="flex-[.5]" />
    </header>
  );
};
export default DesktopNavBar;
