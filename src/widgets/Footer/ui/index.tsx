import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Address } from './address';
import cls from './styles.module.scss';

export interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={classNames(cls.root, {}, [className])}>
      <Address />
    </footer>
  );
});
