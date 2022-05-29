import type { FC } from 'react';

import ExperienceCard from './components';

const DesktopExperiencePage: FC = () => {
  return (
    <section className="relative hidden md:visible md:flex">
      <div>
        <div className="relative h-[100px] w-[170px]">
          <img
            alt="Moon background"
            src="/assets/images/bg_moon.svg"
            className="absolute z-10 mx-9 h-[70px] w-[70px]"
          />
          <p className="absolute z-20 text-justify text-5xl font-light text-white">
            {'EXPERIENCE'}
          </p>
        </div>
        <ExperienceCard />
        <ExperienceCard />
      </div>
      <img
        alt="Experience Image"
        src="/assets/images/bg_experience.svg"
        className="absolute top-[10vh] right-[15vh] m-auto h-[300px] w-[300px]"
      />
    </section>
  );
};

export default DesktopExperiencePage;
