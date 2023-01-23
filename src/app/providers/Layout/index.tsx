import { Header } from '@/widgets/Header';
import { ReactNode } from 'react';

export { Container } from './Container/Container';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
