import type { FC, ReactNode } from 'react';

import NavBar from '@/components/NavBar';

import { MainSeo } from './seo';

interface IMainProps {
  title: string;
  description: string;
  canonical?: string;
  children: ReactNode;
}

const MainLayout: FC<IMainProps> = ({
  description,
  title,
  canonical,
  children,
}) => {
  return (
    <section className='fixed overflow-hidden inset-0'>
      <MainSeo description={description} title={title} canonical={canonical} />
      <article className="absolute h-full w-full bg-dark-primary">
        <NavBar />
        <section className="flex h-full w-full flex-1 ">
          {children}
        </section>
      </article>
    </section>
  );
};

export default MainLayout;
