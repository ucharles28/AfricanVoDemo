import App from 'next/app';
import Head from 'next/head'
// import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import '../styles/tailwind.css'
import './components/Meta'

function MyApp({ Component, pageProps }) {
  return<Component {...pageProps} /> 
}
// <Head>
 //     <title>My page title</title>
  //    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
 //   </Head>
export default MyApp