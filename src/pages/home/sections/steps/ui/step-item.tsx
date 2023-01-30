import Image from 'next/image';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';
import ArrowIcon from '../assets/arrow.svg';
import BorderGradient from '../assets/line_border.png';
import { Step } from '../model';
import cls from './styles.module.scss';

type BorderDirection = 'left' | 'right';

export interface StepItemProps {
  className?: string;
  item: Step;
  borderDir?: BorderDirection;
}

export const StepItem = memo((props: StepItemProps) => {
  const { className, item, borderDir = 'left' } = props;

  const isRight = borderDir === 'right';

  return (
    <div className={classNames(cls.wrapper, { [cls.dir_right]: isRight }, [])}>
      <Card className={classNames(cls.step, {}, [className])}>
        <Text title={item.step} size={TextSize.M} />
        <Text title={item.title} size={TextSize.L} />
        <Text text={item.text} size={TextSize.M} />
        <Image
          src={BorderGradient}
          alt='рамка'
          className={classNames(cls.border_image, {}, [cls[borderDir]])}
        />
      </Card>
      <div
        className={classNames(cls.indicator, {
          [cls.indicator_right]: isRight,
        })}
      >
        <ArrowIcon className={cls.arrow} />
        <div className={cls.circle} />
      </div>
    </div>
  );
});
