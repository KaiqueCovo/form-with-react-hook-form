import { ChakraProvider } from '@chakra-ui/react'

import '@/styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
