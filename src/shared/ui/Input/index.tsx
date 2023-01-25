import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import cls from './styles.module.scss';

type InputTheme = 'default' | 'error' | 'disabled';

export interface InputProps<T extends string>
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
  > {
  className?: string;
  disabled?: boolean;
  value?: T;
  onChange?: (value: T) => void;
  theme?: InputTheme
}

export const Input = memo(<T extends string>(props: InputProps<T>) => {
  const {
    className,
    children,
    value,
    onChange,
    disabled,
    theme = 'default',
    type,
    ...otherProps
  } = props;

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value as T);
    },
    []
  );

  const mods: Mods = {
    [cls.disabled]: disabled
  }

  return (
    <div className={classNames(cls.root, mods, [className, cls[theme]])}>
      <input
        onChange={onChangeHandler}
        value={value}
        className={classNames(cls.input, {}, [cls[theme]])}
        type={type}
        readOnly={disabled}
        {...otherProps}
      >
        {children}
      </input>
    </div>
  );
});
