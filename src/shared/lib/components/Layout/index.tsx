import { ReactNode } from 'react';
// eslint-disable-next-line boundaries/element-types
import { Footer } from '@/widgets/Footer';
// eslint-disable-next-line boundaries/element-types
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
      <main className='App'>{children}</main>
      <Footer />
    </>
  );
};
