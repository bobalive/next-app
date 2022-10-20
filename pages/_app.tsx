import { AppProps } from '../node_modules/next/app';
import Head from '../node_modules/next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }:AppProps) {
  return <>
    <Head>
      <title>My Top - лучший топ</title>
      <link key={1}  rel='icon' href = '/favicon.ico'></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>


       
    </Head>
    <Component {...pageProps} />
  </>;
  
}

export default MyApp;
