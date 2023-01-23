import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';

export interface SubHeaderProps {
  className?: string;
}

export const SubHeader = memo((props: SubHeaderProps) => {
  const { className } = props;

  const Title = (
    <>
      <span className={cls.title_main}>Frontend</span>
      <p className={cls.subtitle}>Developer</p>
      <p className={cls.course}>Courses</p>
    </>
  );

  return (
    <section className={classNames(cls.root, {}, [className])}>
      <Text
        size={TextSize.XL}
        className={cls.title}
        title={Title}
      />
    </section>
  );
});
