import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Container } from '@/shared/lib/components';
import { Address } from './address';
import { Company } from './company';
import { Socials } from './socials';
import cls from './styles.module.scss';

export interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={classNames(cls.root, {}, [className])}>
      <Container className={cls.container}>
        <Address />
        <Company />
        <Socials />
      </Container>
    </footer>
  );
});
