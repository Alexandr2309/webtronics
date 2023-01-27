import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './styles.module.scss';

type BlurPosition = 'top' | 'bottom' | 'reverse_top' | 'reverse_bottom';

export interface BlurProps {
  className?: string;
  position?: BlurPosition;
}

export const Blur = memo((props: BlurProps) => {
  const { className, position = 'bottom' } = props;


  return <div className={classNames(cls.root, {}, [className, cls[position]])} />;
});
