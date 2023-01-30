import { ProgrammingCardItem } from '@/pages/home/sections/technologies/ui/cards/card-item';
import { classNames } from '@/shared/lib/classNames';
import { ProgrammingCard } from '../../model';
import cls from '../styles.module.scss';

export interface ProgrammingCardsProps {
  className?: string;
  cards: ProgrammingCard[];
}

export const ProgrammingCards = ({
  className,
  cards,
}: ProgrammingCardsProps) => {
  return (
    <div className={classNames(cls.cards, {}, [className])}>
      {cards.map((card) => (
        <ProgrammingCardItem card={card} className={cls.card_item} />
      ))}
    </div>
  );
};
