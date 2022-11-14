import '../styles/globals.css'
import { wrapper } from '../redux/store/store.js'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
