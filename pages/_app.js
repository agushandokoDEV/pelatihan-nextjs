import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import createEmotionCache from '@/utils/createEmotionCache';
import theme from '@/utils/theme';
import { useStore } from 'react-redux';
import { wrapper } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore((state) => state);

  return (
    <PersistGate loading='<h1>Loading</h1>' persistor={store.__persistor}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </PersistGate>
  )
}

export default wrapper.withRedux(MyApp);;
