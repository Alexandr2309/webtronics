import Image from 'next/image';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import Border from '../../assets/border.svg';
import cls from '../styles.module.scss';

export interface SliderProps {
  className?: string;
  data: any[];
  selected: number;
}

export const Slider = memo((props: SliderProps) => {
  const { className, data, selected } = props;
  return (
    <div className={classNames(cls.content_slider, {}, [className])}>
      {data.map((img, i) => (
        <div
          className={classNames(
            cls.slide,
            {
              [cls.active]: selected === i + 1,
            },
            [cls[img.cls]]
          )}
          key={img?.id}
        >
          <Image src={img.source} alt='mentor' className={cls.img} />
          <Border className={cls.bg} />
        </div>
      ))}
    </div>
  );
});
