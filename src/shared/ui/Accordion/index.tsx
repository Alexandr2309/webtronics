import Image from 'next/image';
import { memo, useState } from 'react';
import CloseIcon from '@/shared/assets/icons/close.svg';
import OpenIcon from '@/shared/assets/icons/open.svg';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextSize } from '../Text';
import GradientBorder from './border.png';
import cls from './styles.module.scss';

export interface FAQ {
  title: string;
  answer: string;
}

export interface AccordionProps<T extends FAQ> {
  className?: string;
  data: Array<T | FAQ>;
}

const AccordionComponent = <T extends FAQ>(props: AccordionProps<T>) => {
  const { className, data } = props;
  const [selected, setSelected] = useState<null | number>(null);
  const toggleAccordion = (i: number) => {
    if (i === selected) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={classNames(cls.root, {}, [className])}>
      <div className={cls.accordion}>
        {data.map((item, i) => (
          <div className={cls.item} key={i}>
            {/*<Image src={GradientBorder} alt='background' className={cls.bg} />*/}
            <div className={cls.title} onClick={() => toggleAccordion(i)}>
              <Text size={TextSize.M} title={item.title} />
              {selected === i ? <OpenIcon /> : <CloseIcon />}
            </div>
            <div
              className={classNames(
                cls.content,
                { [cls.show]: selected === i },
                []
              )}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Accordion = memo(AccordionComponent) as typeof AccordionComponent;
