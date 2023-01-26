import { ReactNode } from 'react';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export { Container } from './Container';

interface LayoutProps {
  children: ReactNode;
  subHeader?: boolean;
}

export const Layout = ({ children, subHeader = false }: LayoutProps) => {
  return (
    <>
      <Header subHeader={subHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
