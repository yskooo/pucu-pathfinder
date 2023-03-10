import Head from 'next/head'
import Script from 'next/script'
import  {Inter} from '@next/font/google'
import Header from '../components/section/Header.jsx'
import Hero from '../components/Hero.jsx'
import Feature from '../components/section/Feature.jsx'
import About from '../components/section/About.jsx'
import Team from '../components/section/Team.jsx'
import Contact from '../components/section/Contact.jsx'
import Footer from '../components/Footer.jsx'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PUCU Pathfinder | RRL Made Easy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pathfinder.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js" defer/>
        <script src="../path/to/flowbite/dist/flowbite.min.js" defer/>
      </Head>
      <div>
        <Header/> 
        <Hero/>
        <About/>
        <Feature/>
        <Team/>
        <Contact/>
      </div>
    </>
  )
}
