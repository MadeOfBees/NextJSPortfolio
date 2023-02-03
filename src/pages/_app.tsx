import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  console.log('Secret revealed! Click "Bees Portfolio" to change the theme');
  return <Component {...pageProps} />
}
