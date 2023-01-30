import { classNames } from '@/shared/lib/classNames';
import cls from './Overlay.module.scss';

export interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = ({ className, onClick }: OverlayProps) => (
  <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
);
