import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import cls from './styles.module.scss';

const enum SubHeaderInfo {
  MAIN_TXT = 'Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).',
  BTN_TXT = 'Start my career change',
}

export interface SubHeaderProps {
  className?: string;
}

export const SubHeader = memo((props: SubHeaderProps) => {
  const { className } = props;

  const Title = (
    <>
      <div className={cls.title_main}>
        Front-End{' '}
        <Text
          className={cls.text}
          size={TextSize.M}
          theme={TextTheme.WHITE}
          text={SubHeaderInfo.MAIN_TXT}
        />
      </div>
      <div className={cls.subtitle}>
        <Button className={cls.btn}>{SubHeaderInfo.BTN_TXT}</Button>Developer
      </div>
      <p className={cls.course}>Courses</p>
    </>
  );

  return (
    <section className={classNames(cls.root, {}, [className])}>
      <Text size={TextSize.XL} className={cls.title} title={Title} />
    </section>
  );
});
