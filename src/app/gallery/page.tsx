import { Roboto } from 'next/font/google';
import React from 'react';

import styles from '@/styles/Gallery.module.css';

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const Gallery = () => {
  return (
    <main className='mt-24 overflow-x-hidden'>

      {/* Gallery Hero Image Section */}
      <section>

        <div className={`${styles.gallery_background_img}`}>

          <div>
            <h1 className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl xxxs:text-3xl ${robotoFont.className}`}>Gallery</h1>
          </div>

        </div>

      </section>

      {/* Gallery Picture Section */}
      <section className='bg-matteblack py-16 xs:py-8'>



      </section>

    </main>
  );
};

export default Gallery;