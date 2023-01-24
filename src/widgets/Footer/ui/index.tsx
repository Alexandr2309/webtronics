import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer = memo(( props: FooterProps ) => {
  const { className } = props;
  return (
    <footer className={classNames(cls.root, {}, [ className ])}>
    </footer>
  );
});