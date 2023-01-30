import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
} from 'react';
import { RefCallBack } from 'react-hook-form';
import { classNames, Mods } from '@/shared/lib/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import cls from './styles.module.scss';
type InputTheme = 'default' | 'error' | 'disabled';

type InputProps = {
  className?: string;
  disabled?: boolean;
  // onChange?: (value: T) => void;
  theme?: InputTheme;
  errMsg?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'> &
  Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  >;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      className,
      children,
      value,
      onChange,
      disabled,
      theme = 'default',
      type,
      errMsg,
      ...otherProps
    } = props;

    const mods: Mods = {
      [cls.disabled]: disabled,
    };

    return (
      <div className={classNames(cls.root, mods, [className])}>
        <input
          ref={ref}
          onChange={onChange}
          className={classNames(cls.input, { [cls.error]: errMsg }, [
            cls[theme],
          ])}
          type={type}
          readOnly={disabled}
          {...otherProps}
        />
        {errMsg && <Text text={errMsg} size={TextSize.M} />}
      </div>
    );
  }
);
