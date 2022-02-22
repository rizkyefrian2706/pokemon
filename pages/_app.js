import Layout from '../components/layout'
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// export default MyApp
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import React from "react"
import { wrapper } from "../redux/store"

const MyApp = ({ Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default wrapper.withRedux(MyApp);