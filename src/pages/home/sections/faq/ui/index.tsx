import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { FAQ as IFAQ } from '@/shared/ui/Accordion';
import { Blur } from '@/shared/ui/Blur';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Mark } from './mark';
import { Questions } from './questions';
import cls from './styles.module.scss';

interface FAQProps {
  className?: string;
  questions?: IFAQ[];
}

export const FAQ = memo((props: FAQProps) => {
  const { className, questions } = props;
  return (
    <section className={classNames(cls.root, {}, [className])} id="faq">
      <Blur position='top' className={cls.blur} />
      <Blur position='bottom' className={cls.blur} />
      <Container>
        <Text
          title={`Frequently Asked
           Questions`}
          size={TextSize.X}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <div className={cls.content}>
          <Mark />
          <Questions />
        </div>
      </Container>
    </section>
  );
});
