import cls from './styles.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo } from 'react';

type ButtonTheme = 'default' | 'disabled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme
}

export const Button = memo(( props: ButtonProps ) => {
  const { className, theme = 'default', children, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.root, {}, [ className, cls[theme] ])}
      {...otherProps}
    >
      {children}
    </button>
  )
})