import PageLayout from '@/components/PageLayout';
import Head from 'next/head'
import Image from 'next/image'
import HomeBackgroundImage from '../../public/images/home_hero_img.jpg'
import styles from '../styles/Home.module.css'
import { Roboto  } from 'next/font/google'

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

/* Represent Index or Home Page */
export default function Home() {
  return (
    <>
      <main className={`mt-24 ${robotoFont.className}`}>


        <div className={styles.homeBackgroundImage}>
          {/* <Image src={HomeBackgroundImage} alt="Home Background Image" /> */}

          <div>

          <h1 className='uppercase text-ivory text-center text-7xl lg:text-6xl md:text-5xl sm:text-4xl'>R &amp; S Constructions</h1>

          <br />
         
          <h2 className='uppercase text-ivory text-center text-3xl'>Serving Maryland Since 2016</h2>

          </div>

        </div>
      </main>
    </>
  );
};
