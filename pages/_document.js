import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from "../theme/theme"

export default function Document() {
  return (
    <Html>
      <Head lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="bg-white">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}