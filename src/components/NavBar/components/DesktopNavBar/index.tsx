import { useRouter } from 'next/router';
import type { FC } from 'react';

import usePageTranslation from '@/hooks/usePageTranslation';

import NavButton from './components/NavButton';

const DesktopNavBar: FC = () => {
  const router = useRouter();
  const { t } = usePageTranslation('nav', 'Nav');

  return (
    <header className="hidden md:flex ">
      <img
        alt="Logo"
        src="/assets/images/logo.png"
        className="h-[100px] object-contain"
      />
      <span className="flex-[6]" />
      <NavButton path="/" title={t('home')} active={router.pathname === '/'} />
      <NavButton
        path="/about"
        title={t('about')}
        active={router.pathname === '/about'}
      />
      <NavButton
        path="/forHire"
        title={t('experience')}
        active={router.pathname === '/forHire'}
      />
      <span className="flex-[1]" />
      <button className="self-center rounded-3xl bg-dark-secondary ">
        <p className="px-10 py-3 text-white">{t('contact')}</p>
      </button>
      <span className="flex-[.5]" />
    </header>
  );
};
export default DesktopNavBar;
