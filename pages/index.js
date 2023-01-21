import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Header from '../components/section/Header.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/section/About.jsx'
import Team from '../components/section/Team.jsx'
import Contact from '../components/section/Contact.jsx'
import Footer from '../components/Footer.jsx'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PUCU Pathfinder</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header/> 
        <Hero/>
        <About/>
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}
