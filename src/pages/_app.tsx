import '@/app/styles/index.scss';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/storeProvider';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ErrorBoundary>
  );
}
