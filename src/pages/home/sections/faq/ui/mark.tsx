import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextSize } from '@/shared/ui/Text';

import QMark from '../assets/question.svg';

import cls from './styles.module.scss';

interface MarkProps {
  className?: string;
}

export const Mark = memo((props: MarkProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.mark, {}, [className])}>
      <Text
        text={`Do you have any kind of questions?
        We are here to help.
        `}
        size={TextSize.M}
        className={cls.text_mark}
      />
      <QMark className={cls.question_mark} />
    </div>
  );
});
