/**
 * Created by Саня on 01.11.2022
 */
import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './styles.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import UserIcon from './avatar.svg';

interface IAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: IAvatarProps) => {
  const { alt, src, size = 100, className } = props;

  const fallback = <Skeleton width={size} height={size} border='50%' />;
  const errorFallback = <AppImage src={UserIcon} />;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      alt={alt}
      src={src}
      className={classNames(cls.root, {}, [className])}
      style={styles}
    />
  );
};
