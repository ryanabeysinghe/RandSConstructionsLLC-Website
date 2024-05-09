"use client"

import { Monda, Roboto } from 'next/font/google';
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";

import styles from '@/styles/Gallery.module.css';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions, Counter, Fullscreen, Slideshow, Thumbnails } from "yet-another-react-lightbox/plugins";
import { bathroomRemodelSlides, deck_restoration_slides, basementRemodelingSlides } from '@/components/GalleryData';
import Image from 'next/image';

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const mondaFont = Monda({
  subsets: ['latin'],
  variable: '--font-monda',
  weight: '700'
})

interface GalleryComponentProps {
  imgSrc: { src: string; title: string; description: string }[];
  title: string;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ imgSrc, title }) => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-black bg-white p-6 lg:p-4 md:p-6 relative xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-black md:-right-3 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

      
      <img src={imgSrc[0].src} alt={imgSrc[0].title} onClick={() => setOpen(true)} className="w-full h-auto object-cover border-2 border-solid border-black rounded-[0.5rem] cursor-pointer grayscale transition-all duration-500 ease-out hover:grayscale-0" />
      
      
      <Lightbox
        plugins={[Captions, Counter, Fullscreen, Slideshow, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'center'
        }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        open={open}
        slides={imgSrc}
        close={() => setOpen(false)}
      />

      <div className='w-full flex flex-col items-center justify-center mt-4'>

        <span className={`text-customMustardYellow text-3xl xl:text-2xl lg:text-xl md:text-4xl sm:text-3xl xs:text-2xl xxxs:text-xl ${mondaFont.className}`}>{title}</span>

      </div>

    </div>
  );
};


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
      <section className='bg-customWhite py-16 xs:py-20 xxs:py-16'>

        <div className='w-full flex flex-col items-center justify-center'>

          <div className='w-full h-full inline-block z-0 px-16 lg:px-14'>

            <div className='grid grid-cols-12 gap-x-16 gap-y-16 lg:gap-x-14 lg:gap-y-14 md:gap-x-0 md:gap-y-20 xxs:gap-y-16'>

              {/* Row 1 */}
              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={basementRemodelingSlides} title='Basement Remodeling' />

              </div>

              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={deck_restoration_slides} title='Deck Restoration' />

              </div>

              <div className='col-span-4 md:col-span-12'>

                <GalleryComponent imgSrc={deck_restoration_slides} title='Deck Restoration' />

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Gallery;