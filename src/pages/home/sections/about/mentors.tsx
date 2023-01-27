import { StaticImageData } from 'next/dist/client/image';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { lineStack, mentors } from './model';
import cls from './styles.module.scss';

export interface AboutProps {
  className?: string;
}

interface MentorItemProps {
  src: string | StaticImageData;
  title: string;
  subtitle: string;
  className?: string;
  imgCls?: string;
}

const MentorItem = (props: MentorItemProps) => (
  <div className={classNames(cls.item, {}, [cls[props.className ?? '']])}>
    <Avatar src={props.src} size={184} className={cls[props.imgCls || '']} />
    <Text title={props.title} size={TextSize.M} className={cls.name} />
    <Text text={props.subtitle} size={TextSize.S} className={cls.name} />
  </div>
);

export const Mentors = memo(({ className }: AboutProps) => {
  return (
    <div className={classNames(cls.mentors, {}, [className])} id='about'>
      <Text
        title='Mentors'
        size={TextSize.L}
        className={cls.block_title}
        align={TextAlign.CENTER}
      />
      <div className={cls.wrapper}>
        {mentors.map((mentor, i) => {
          const line = lineStack[i];
          return (
            <div className={cls.mentor_wrap}>
              <line.Line className={cls[line.cls || '']} />
              <MentorItem
                src={mentor.img}
                title={mentor.name}
                subtitle={mentor.about}
                className={mentor.className}
                imgCls={mentor.imgCls}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
