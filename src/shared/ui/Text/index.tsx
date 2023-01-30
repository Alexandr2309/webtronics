import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './styles.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  WHITE = 'white',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  X = 'size_x',
  XL = 'size_xl',
}

export interface TextProps {
  className?: string;
  theme?: TextTheme;
  title?: string | ReactNode;
  text?: string;
  align?: TextAlign;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h5',
  [TextSize.M]: 'h4',
  [TextSize.L]: 'h3',
  [TextSize.X]: 'h2',
  [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = TextTheme.WHITE,
    text,
    title,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const addClasses = [className, cls[theme], cls[align], cls[size]];

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, {}, addClasses)}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
