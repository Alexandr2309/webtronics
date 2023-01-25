import { memo } from 'react';
import ArrowIcon from '@/shared/assets/icons/arrow_left.svg';
import { classNames } from '@/shared/lib/classNames'
import { Button } from "../Button";
import cls from './styles.module.scss'

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