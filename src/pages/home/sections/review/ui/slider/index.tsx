import { memo, useCallback, useState } from 'react';
import { Slider } from '@/pages/home/sections/review/ui/slider/slider';
import { classNames } from '@/shared/lib/classNames';
import { reviewers } from '../../model';
import cls from '../styles.module.scss';
import { Controls } from './controls';

export interface ReviewProps {
  className?: string;
  data?: any[];
}

export const ReviewSlider = memo((props: ReviewProps) => {
  const { className, data = reviewers } = props;

  const [selected, setSelected] = useState(1);

  const increaseSelected = useCallback(() => {
    if (selected === 3) {
      setSelected(1);
    } else setSelected((current) => current + 1);
  }, [selected]);

  const decreaseSelected = useCallback(() => {
    if (selected === 1) {
      setSelected(3);
    } else setSelected((current) => current - 1);
  }, [selected]);

  return (
    <div className={classNames(cls.wrap_slider, {}, [className])}>
      <div className={cls.count}>
        <span className={cls.current_selected}>{selected}</span>/
        <sup className={cls.sup}> {data.length}</sup>
      </div>
      <Controls prevHandler={decreaseSelected} nextHandler={increaseSelected} />
      <Slider data={data} className={cls.slider} selected={selected} />
    </div>
  );
});
