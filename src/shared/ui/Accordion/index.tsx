import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, MutableRefObject, useRef, useState } from 'react';
import OpenIcon from '@/shared/assets/icons/open.svg';
import CloseIcon from '@/shared/assets/icons/close.svg';
import { Card } from '@/shared/ui/Card';

export interface AccordionProps {
  className?: string;
  content: string;
  title: string;
}

export const Accordion = memo((props: AccordionProps) => {
  const { className, content: children, title } = props;

  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');

  const content = useRef() as MutableRefObject<HTMLDivElement>;

  function toggleAccordion() {
    setActive(active === '' ? 'active' : '');
    setHeight(
      active === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <Card className={classNames(cls.accordion__section, {}, [className])}>
      <button
        className={classNames(cls.accordion, { [cls.active]: active }, [])}
        onClick={toggleAccordion}
      >
        <p className={cls.accordion__title}>{title}</p>
        {active === 'active' ? (
          <OpenIcon className={cls.accordion__icon} />
        ) : (
          <CloseIcon className={cls.accordion__icon} />
        )}
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={cls.accordion__content}
      >
        <div
          className={cls.accordion__text}
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    </Card>
  );
});
