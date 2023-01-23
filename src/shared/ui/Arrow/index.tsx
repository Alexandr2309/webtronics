import cls from './styles.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react';
import { Button } from "../Button";
import ArrowIcon from '@/shared/assets/icons/arrow_left.svg';

type ArrowDirection = 'left' | 'right';

export interface ArrowProps {
  className?: string;
  direction?: ArrowDirection;
}

export const Arrow = memo(( props: ArrowProps ) => {
  const { className, direction } = props;
  return (
    <Button
      className={classNames(cls.root, {[cls.right]: direction === 'right'}, [ className ])}
    >
      <ArrowIcon />
    </Button>
  )
})