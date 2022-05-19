import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

interface IProps {
  close: () => void;
  title: string;
  path: string;
  active: boolean;
}
const HamburgerButton: FC<IProps> = ({ close, path, title, active }) => {
  const router = useRouter();
  return (
    <Link href={path}>
      <a
        onClick={(e) => {
          router.push(path);
          e.preventDefault();
          close();
        }}
        className={clsx(
          'm-2 rounded-md px-5 py-2 text-left text-4xl text-white hover:border-none',
          active
            ? 'bg-dark-secondary font-light text-white'
            : 'bg-none font-extralight text-white'
        )}
      >
        {title}
      </a>
    </Link>
  );
};

export default HamburgerButton;
