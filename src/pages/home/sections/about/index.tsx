import { classNames } from '@/shared/lib/classNames';
import { TextSize, Text } from '@/shared/ui/Text';
import cls from './styles.module.scss';

export interface AboutProps {
  className?: string;
}

export const About = ({ className }: AboutProps) => {
  return (
    <section className={classNames(cls.index, {}, [className])}>
      <Text title='About' size={TextSize.XL} />

    </section>
  );
};
