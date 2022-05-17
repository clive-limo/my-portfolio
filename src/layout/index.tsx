import type { FC, ReactNode } from 'react';

import TitleBar from '@/components/TitleBar';

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
    <>
      <MainSeo description={description} title={title} canonical={canonical} />
      <article className="absolute h-full w-full bg-dark-primary">
        <TitleBar />
        <section className="flex h-full w-full flex-1 overscroll-y-auto">
          {children}
        </section>
      </article>
    </>
  );
};

export default MainLayout;
