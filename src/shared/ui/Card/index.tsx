import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLAttributes, memo } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = memo((props: CardProps) => {
  const { className, children } = props;
  return (
    <article className={classNames(cls.root, {}, [className])}>
      {children}
    </article>
  );
});
