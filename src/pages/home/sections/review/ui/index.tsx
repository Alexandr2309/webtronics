import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Content } from './content';
import cls from './styles.module.scss';

export interface ReviewProps {
  className?: string;
}

export const Review = memo(( props: ReviewProps ) => {
  const { className } = props;
  return (
    <section className={classNames(cls.root, {}, [ className ])} id="review">
      <Container>
        <Text
          title={`Review`}
          size={TextSize.X}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Content/>
      </Container>
    </section>
  );
});