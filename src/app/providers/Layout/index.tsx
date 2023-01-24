import { ReactNode } from 'react';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
