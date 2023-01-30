import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Accordion, FAQ as IFAQ } from '@/shared/ui/Accordion';
import { faqArr } from '../model';
import cls from './styles.module.scss';

interface QuestionsProps {
  className?: string;
  questions?: IFAQ[];
}

export const Questions = memo((props: QuestionsProps) => {
  const { className, questions = faqArr } = props;
  return (
    <div className={classNames(cls.accordion, {}, [className])}>
      <Accordion data={questions} />
    </div>
  );
});
