import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Address } from './address';
import cls from './styles.module.scss';
import { Container } from '@/shared/lib/components';
import { Company } from './company';
import { Socials } from './socials';

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
