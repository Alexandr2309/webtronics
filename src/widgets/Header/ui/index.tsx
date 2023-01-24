import cls from './styles.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import LogoIcon from '@/shared/assets/icons/logo.svg';
import { HeaderNavigations } from './navigations';
import { Container } from '@/app/providers/Layout';
import WorkerImg from '@/widgets/Header/ui/header_worker.png';
import Image from 'next/image';
import { SubHeader } from '@/pages/home/sections/sub-header';

export interface HeaderProps {
  className?: string;
}

const BackgroundWorker = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  >
    <Image src={WorkerImg} alt='worker' fill />
  </div>
);

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  return (
    <header className={classNames(cls.root, {}, [className])}>
      <BackgroundWorker />
      <Container className={cls.container}>
        <LogoIcon className={cls.icon} />
        <HeaderNavigations />
      </Container>
      <Container className={cls.container}>
        <SubHeader />
      </Container>
    </header>
  );
});
