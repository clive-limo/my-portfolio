import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

interface IProps {
  path: string;
  title: string;
  active: boolean;
}

const NavButton: FC<IProps> = ({ path, active, title }) => {
  return (
    <Link href={path}>
      <a
        className={clsx(
          'mx-2 max-h-14 self-center rounded-md px-5  py-3 text-white hover:border-none',
          active
            ? 'bg-orange-300/10 font-semibold text-white'
            : 'bg-none font-light text-white'
        )}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavButton;
