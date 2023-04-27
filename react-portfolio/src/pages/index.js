
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import Nav from '@/components/Nav'
import About from '@/components/About'

export default function Home() {
  return (
    <div className='font-burtons'>
      <Head>
        <title>Austin Hollands Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white' px-10>
        <section className='min-h-screen'>

          <Nav/>
         
          <div className='text-center px-10 my-5'>
            <h1 className='text-5xl py-2 text-teal-500 font-medium'> Austin Holland</h1>
            <h2 className='text-2xl pt-2'>Full Stack Engineer </h2>
            <h2 className='text-2xl pb-2'>React | Node | Python</h2>
            <About/>
          </div>
          <div>

          </div>
        </section>
      </main>
    </div>
  )
}
