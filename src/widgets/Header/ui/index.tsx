import Image from 'next/image';
import { memo, ReactNode } from 'react';
import { LogoIcon } from '@/shared/assets/icons';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Blur } from '@/shared/ui/Blur';
import WorkerImg from './header_worker.png';
import { HeaderNavigations } from './navigations';
import cls from './styles.module.scss';
import { SubHeader } from './sub-header';

export interface HeaderProps {
  className?: string;
  subHeader?: boolean;
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
  const { className, subHeader } = props;
  return (
    <header className={classNames(cls.root, {}, [className])}>
      <BackgroundWorker />
      <Container className={cls.container}>
        <LogoIcon className={cls.icon} />
        <HeaderNavigations />
      </Container>
      {subHeader && (
        <Container className={cls.container}>
          <SubHeader />
        </Container>
      )}
      <Blur />
    </header>
  );
});
