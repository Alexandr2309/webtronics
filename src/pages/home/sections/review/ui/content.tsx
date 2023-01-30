import { classNames } from '@/shared/lib/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ReviewSlider } from './slider';
import cls from './styles.module.scss';

export interface ContentProps {
  className?: string;
}

const text =
  'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.';

export const Content = ({ className }: ContentProps) => {
  return (
    <div className={classNames(cls.content, {}, [className])}>
      <Text
        title='Best courses ever'
        text={text}
        size={TextSize.M}
        className={cls.title}
      />
      <ReviewSlider />
    </div>
  );
};
