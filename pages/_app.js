import '../styles/globals.css'
import {Inter} from "@next/font/google"
import { Layout } from '../components/Layout'

const inter = Inter({subsets: ["latin"]})

export default function App({ Component, pageProps }) {
  return (
    // <div className={inter.className + "h-screen min-h-screen bg-white"}>
     <Layout>
      <Component {...pageProps} />
     </Layout>
    //  </div>
)}
