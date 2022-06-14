import App from 'next/app';
// import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return<Component {...pageProps} /> 
}
export default MyApp