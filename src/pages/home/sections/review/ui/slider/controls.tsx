import { memo } from 'react';
import ArrowLeft from '@/shared/assets/icons/arrow_left.svg';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import cls from '../styles.module.scss';

export interface ControlsProps {
  className?: string;
  nextHandler: () => void;
  prevHandler: () => void;
}

export const Controls = memo((props: ControlsProps) => {
  const { className, prevHandler, nextHandler } = props;
  return (
    <div className={classNames(cls.controls, {}, [className])}>
      <Button onClick={prevHandler} className={classNames(cls.control, {}, [])}>
        <ArrowLeft />
      </Button>
      <Button onClick={nextHandler} className={classNames(cls.control, {}, [])}>
        <ArrowLeft className={cls.revert} />
      </Button>
    </div>
  );
});
