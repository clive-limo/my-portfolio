import type { FC } from 'react';

import usePageTranslation from '@/hooks/usePageTranslation';

const HomePage: FC = () => {
  const { t } = usePageTranslation('home', 'Home');
  return (
    <section className="relative flex h-full w-full">
      <img
        alt="portrait-bg"
        src="/assets/images/bg_mobile.svg"
        className="fixed right-0 bottom-0 object-contain md:hidden md:h-[50vh]"
      />
      <img
        alt="portrait-bg"
        src="/assets/images/bg_desktop.svg"
        className="fixed right-0 bottom-0 hidden max-h-[80vh] md:flex"
      />
      <div className="mx-[20px] p-5 md:mx-[15vw] md:my-[10vw]">
        <p className="text-3xl font-extralight leading-tight text-white">
          {t('greeting')}
        </p>
        <p className="my-0 text-[90px] font-bold leading-tight text-white">
          {t('firstName')}
        </p>
        <p className="my-0 text-[90px] font-bold leading-tight text-white">
          {t('secondName')}
        </p>
        <p className="my-0 text-xl font-bold leading-tight text-light-primary">
          {t('description')}
        </p>
        <button className="my-5 rounded-[30px] bg-dark-secondary px-[50px] py-3 font-semibold text-white">
          {t('hireMe')}
        </button>
      </div>
    </section>
  );
};

export default HomePage;
