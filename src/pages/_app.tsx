import '@/app/styles/index.scss';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/storeProvider';
import { Layout } from '@/shared/lib/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </ErrorBoundary>
  );
}
