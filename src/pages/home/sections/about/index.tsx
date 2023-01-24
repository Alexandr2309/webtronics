import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextSize, Text } from '@/shared/ui/Text';

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
