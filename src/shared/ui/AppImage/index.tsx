import NextImage from 'next/image';
import { memo, ReactElement, useLayoutEffect, useState } from 'react';

type ImageNext = typeof import('next/image');

interface CustomProps {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

// @ts-ignore
export type AppImageProps = ImageNext['ImageProps'] & CustomProps;

export const AppImage = memo((props: AppImageProps) => {
  const { className, src, alt, fallback, errorFallback, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    if (typeof src === 'object') {
      img.src = src?.src ?? '';
    } else {
      img.src = src ?? '';
    }

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <NextImage className={className} src={src} alt={alt} {...otherProps} />
  );
});
