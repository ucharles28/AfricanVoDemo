import App from 'next/app';
// import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/styles.css'
import '../styles/tailwind.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
const colors = {
  purple: {
    50: '#F9F4FF',
    100: '#ECDEFF',
    200: '#E0C8FF',
    300: '#D0ACFF',
    400: '#C190FF',
    500: '#B175FF',
    600: '#874AD4',
    700: '#6C3BAA',
    800: '#512D80',
    900: '#361E55',
    1000: '#A259FF',
  },
  gray: {
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}
const theme = extendTheme({ colors })

console.log('Where am i : ' + process.env.REACT_APP_WHERE_AM_I);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp