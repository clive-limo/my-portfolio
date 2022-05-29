import type { FC } from 'react';

const ExperienceCard: FC = () => {
  return (
    <section className="my-5  flex flex-col">
      <div className="flex w-[50vw]">
        <div className="mx-2 w-[5px] bg-dark-secondary" />
        <p className="text-3xl font-light text-dark-secondary">COMPANY</p>
      </div>
      <div className="flex w-[50vw]">
        <div className="mx-2 w-[5px] bg-white" />
        <p className="p-2 text-lg font-thin text-white">COMPANY</p>
      </div>
      <div className="flex w-[50vw]">
        <div className="mx-2 w-[5px] bg-white" />
        <p className="p-2 text-lg font-thin text-white">COMPANY</p>
      </div>
      <div className="flex w-[50vw]">
        <div className="mx-2 w-[5px] bg-white" />
        <p className="p-2 text-lg font-thin text-white">COMPANY</p>
      </div>
    </section>
  );
};

export default ExperienceCard;
