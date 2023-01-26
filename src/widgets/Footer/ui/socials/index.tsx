import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { memo } from 'react';
import { socialsItems } from '../../model/socials';
import { Text, TextSize } from '@/shared/ui/Text';
import rootCls from '../styles.module.scss';

export interface SocialsProps {
  className?: string;
}

export const Socials = memo((props: SocialsProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Text size={TextSize.S} title='Socials' className={rootCls.group_title} />
      <div className={cls.socials}>
        {socialsItems.map((item) => (
          <item.Icon />
        ))}
      </div>
    </div>
  );
});
