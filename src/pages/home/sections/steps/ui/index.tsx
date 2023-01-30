import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Blur } from '@/shared/ui/Blur';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { StepsList } from './steps-list';
import cls from './styles.module.scss';

export interface StepsProps {
  className?: string;
}

export const Steps = memo((props: StepsProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.root, {}, [className])} id="steps">
      <Blur position='top' className={cls.blur} />
      <Blur position='bottom' className={cls.blur} />
      <Container>
        <Text
          title='Steps'
          size={TextSize.X}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <StepsList />
      </Container>
    </section>
  );
});
