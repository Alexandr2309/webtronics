import Link from 'next/link';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { headerItems } from '../model';
import cls from './styles.module.scss';

export interface navigationsProps {
  className?: string;
}

export const HeaderNavigations = memo(({ className }: navigationsProps) => {
  return (
    <nav className={classNames(cls.nav, {}, [className])}>
      {headerItems.map((link, index) => (
        <Link href={link.path} key={index} className={cls.item}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
});
