import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Blur } from '@/shared/ui/Blur';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { progTechnologies } from '../model';
import { ProgrammingCards } from './cards';
import cls from './styles.module.scss';

export interface TechnologiesProps {
  className?: string;
}

export const Technologies = memo((props: TechnologiesProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.root, {}, [className])} id='technologies'>
      <Blur position='top' className={cls.blur} />
      <Blur position='bottom' className={cls.blur} />
      <Container>
        <Text
          title='Programming technologies'
          text=' By the end, you’ll have the portfolio and interview skills you need to start your new career.'
          size={TextSize.X}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <ProgrammingCards cards={progTechnologies} />
      </Container>
    </section>
  );
});
