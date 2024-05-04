import '@/app/global.css';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import ThemeCustomModeProvider from '../../src/styles/ThemeContext';
// import '../utils/wpRenderer/css/style.css'; // important

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AppCacheProvider>
      <ThemeCustomModeProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeCustomModeProvider>
    </AppCacheProvider>
  );
}
