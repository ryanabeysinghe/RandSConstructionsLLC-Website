import PageLayout from '@/components/PageLayout';
import Head from 'next/head'
import Image from 'next/image'
import HomeBackgroundImage from '../../public/images/home_hero_img.jpg'
import styles from '../styles/Home.module.css'
import { Roboto } from 'next/font/google'
import Link from 'next/link';

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const robotoFontThin = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400'
})

/* Represent Index or Home Page */
export default function Home() {
  return (
    <>
      <main className={`mt-24`}>


        <div className={styles.homeBackgroundImage} >
          {/* <Image src={HomeBackgroundImage} alt="Home Background Image" /> */}

          <div>

            <h1 className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-5xl sm:text-4xl ${robotoFont.className}`}>R &amp; S Constructions</h1>

            <br />

            <h2 className={`uppercase !font-thin text-ivory text-center text-4xl ${robotoFontThin.className}`}>Serving Maryland Since 2016</h2>

            <br /><br />

            <div className='flex flex-row justify-center items-center'>
              <Link href='/services' target='_self'>
                <input type='button' value='Our Services' className='w-[180px] h-[50px] border-solid border-ivory border-2 outline-none text-ivory text-xl cursor-pointer uppercase mx-5 transition-all duration-500 ease-in-out hover:bg-black-opacity-50' />
              </Link>

              <Link href='/contact' target='_self'>
                <input type='button' value='Free Estimate' className='w-[180px] h-[50px] border-solid border-ivory border-2 outline-none text-ivory text-xl cursor-pointer uppercase mx-5 transition-all duration-500 ease-in-out hover:bg-black-opacity-50' />
              </Link>
            </div>


          </div>







        </div>
      </main>
    </>
  );
};
