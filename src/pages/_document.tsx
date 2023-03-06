import { Html, Head, Main, NextScript } from 'next/document'
import Modal from '../Components/modal'

export default function Document(): JSX.Element {
  return (
    <Html lang="en" data-theme="bee">
      <Head />
      <Modal />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}