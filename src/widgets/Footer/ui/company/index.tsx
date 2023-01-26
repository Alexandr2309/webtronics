import cls from './styles.module.scss';
import rootCls from '../styles.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { footerItems } from '../../model';

export interface CompanyProps {
  className?: string;
}


export const Company = memo((props: CompanyProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.root, {}, [className])}>
      <Text size={TextSize.S} title='Company' className={rootCls.group_title} />
      <div className={cls.block}>
        {footerItems.map((item) => (
          <a href={item.path} className={cls.link}>
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
});
