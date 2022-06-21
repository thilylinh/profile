import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
