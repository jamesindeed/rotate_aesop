import { Layout } from '../components'
import '../styles/globals.scss'
import { StateContext } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
