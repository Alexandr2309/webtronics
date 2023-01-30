import Image from 'next/image';
import { ReactNode } from 'react';
// eslint-disable-next-line boundaries/element-types
import { Footer } from '@/widgets/Footer';
// eslint-disable-next-line boundaries/element-types
import { Header } from '@/widgets/Header';
import BgImage from '../../../assets/images/background.png';

export { Container } from './Container';

interface LayoutProps {
  children: ReactNode;
  subHeader?: boolean;
}

export const Layout = ({ children, subHeader = false }: LayoutProps) => {
  return (
    <div className='wrapper'>
      <Image src={BgImage} alt='bg' className='background' />
      <Header subHeader={subHeader} />
      <main className='App'>{children}</main>
      <Footer />
    </div>
  );
};
