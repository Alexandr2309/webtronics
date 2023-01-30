import Image from 'next/image';
import { memo } from 'react';
import BorderGradient from '@/pages/home/sections/steps/assets/line_border.png';
import { classNames } from '@/shared/lib/classNames';
import { Step, stepsArrLeft, stepsArrRight } from '../model';
import { StepItem } from './step-item';
import cls from './styles.module.scss';

export interface StepsListProps {
  className?: string;
}

export const StepsList = memo((props: StepsListProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.list, {}, [className])}>
      <div className={cls.item}>
        {stepsArrLeft.map((step) => (
          <StepItem item={step} key={step.step}  />
        ))}
      </div>
      <div className={`${cls.item} ${cls.item_right}`}>
        {stepsArrRight.map((step) => (
          <StepItem item={step} key={step.step} borderDir='right'/>
        ))}
      </div>
    </div>
  );
});
