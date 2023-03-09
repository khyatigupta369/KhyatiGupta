import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import kiki from '../public/kiki.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import design from '../public/design.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark":""}>
      <Head>
        <title>Khyati Gallectia</title>
        <meta name="description" content="Generated by Khyati Gupta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black dark:text-gray-100'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons '>KiCreates</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode
              (!darkMode)} className='cursor-pointer text-2xl'/></li>
              <li className='bg-gradient-to-r from-pink-300 to-orange-200 text-white px-4 py02 rounded-md ml-8' ><a target="_blank" href='https://drive.google.com/file/d/1mVbSxS1SedZ_gZvJqqMOWGPvuUCNcI7P/view'>Reśume</a></li>
            </ul>
          </nav>
          <div className='p-10 text-center'>
            <h2 className='text-5xl py-2 text-pink-300 font-medium md:text-6xl'>Khyati Gupta</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and Creator.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-100'>
            Learning by creating! Pre-final year student developer who happens to document her journey!  Connect here!
            </p>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-pink-200 rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96'>
            <Image src = {kiki} alt="3d view me" fill style={{objectFit:"cover"}}/>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-8 mt-6 text-gray-600'>
            {/* <AiFillTwitterCircle onCl='https://twitter.com/Khyatigupta369'/> */}

            <a target="_blank" href="https://twitter.com/Khyatigupta369"><AiFillTwitterCircle color='white'/></a>
            
            <a target="_blank" href='https://www.linkedin.com/in/khyatigupta369/'><AiFillLinkedin color='white'/></a>
          </div>
        </section>
        <section>
        <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>I have been invested in learning  <span className='text-pink-300'>Full-Stack Development</span>, Flutter Development and exploring hand-on projects on various tech-stacks!</p>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>I am always inclined towards being part of a <span className='text-pink-300' >community</span> and sharing my learing</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/khyatigupta369/Moonlit_Cinema" target="_blank" rel="noopener noreferrer">
              <Image 
              alt="" 
              src={web1} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              responsive />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/khyatigupta369/The-Red-Code--" target="_blank" rel="noopener noreferrer">
              <Image 
              alt="" 
              src={web2} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              responsive />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
