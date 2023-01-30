import { HTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './styles.module.scss';

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
