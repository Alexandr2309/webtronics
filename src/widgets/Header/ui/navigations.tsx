import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { headerItems } from '../model';
import Link from 'next/link';
import { memo } from 'react';

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
