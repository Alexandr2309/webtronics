import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Blur } from '@/shared/ui/Blur';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import FrontIcon from './assets/Front.svg';
import { Mentors } from './mentors';
import { TXT_ABOUT } from './model';
import cls from './styles.module.scss';

export interface AboutProps {
  className?: string;
}

export const About = memo(({ className }: AboutProps) => {
  return (
    <section className={classNames(cls.root, {}, [className])} id='about'>
      <Blur position='top' className={cls.blur} />
      <Container>
        <Text
          title='About Us'
          size={TextSize.X}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <div className={cls.content}>
          <Mentors className={cls.block_mentor} />
          <Text text={TXT_ABOUT} size={TextSize.M} className={cls.block_txt} />
        </div>
      </Container>
      <FrontIcon className={cls.front} />
    </section>
  );
});
