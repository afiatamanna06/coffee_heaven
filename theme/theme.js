import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = {
  heading: "Jost, sans-serif",
  body: "Poppins, sans-serif",
  mono: "JetBrains Mono, monospace",
};

const theme = extendTheme({ config, fonts })

export default theme