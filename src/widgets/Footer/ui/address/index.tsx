import { memo } from 'react';
import LogoIcon from '@/shared/assets/icons/logo.svg';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import cls from './styles.module.scss';

export interface AddressProps {
  className?: string;
}

export const Address = memo((props: AddressProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.address, {}, [className])}>
      <LogoIcon className={cls.logo} />
      <Text
        size={TextSize.M}
        text='Wisconsin Ave, Suite 700
Chevy Chase, Maryland 20815'
        className={cls.text}
      />
    </div>
  );
});
