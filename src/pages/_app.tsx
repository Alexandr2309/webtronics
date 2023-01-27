import '@/app/styles/index.scss';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/storeProvider';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </StoreProvider>
  );
}
