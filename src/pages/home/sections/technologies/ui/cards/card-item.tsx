import { classNames } from '@/shared/lib/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { ProgrammingCard } from '../../model';
import cls from '../styles.module.scss';

export interface ProgrammingCardItemProps {
  className?: string;
  card: ProgrammingCard;
}

export const ProgrammingCardItem = ({
  className,
  card,
}: ProgrammingCardItemProps) => {
  const { Icon, label } = card;
  return (
    <div className={classNames(cls.card_wrapper, {}, [className])}>
      {/*<AppImage src={Border} alt='border' className={cls.border} />*/}
      <Icon className={cls.icon} />
      <Text
        className={cls.text}
        size={TextSize.L}
        text={label}
        align={TextAlign.CENTER}
      />
    </div>
  );
};
