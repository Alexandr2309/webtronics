/**
 * Created by Саня on 01.11.2022
 */
import NImage from 'next/image';
import { CSSProperties, useMemo } from 'react';
import Ellipse from '@/shared/assets/images/ellipse.png';
import { StaticImport } from '@/shared/config';
import { classNames } from '@/shared/lib/classNames';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import UserIcon from './avatar.svg';
import cls from './styles.module.scss';

interface IAvatarProps {
  className?: string;
  src: string | StaticImport;
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
    <div className={cls.wrapper} style={styles}>
      <NImage fill className={cls.elipse} src={Ellipse} alt='elipse' />
      <AppImage
        fallback={fallback}
        errorFallback={errorFallback}
        alt={alt}
        src={src}
        // style={styles}
        className={classNames(cls.root, {}, [className])}
      />
    </div>
  );
};
