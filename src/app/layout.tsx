import '../styles/globals.css'
import { Inter, Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app';
import NavigationBar from '@/components/NavigationBar';
import { Container } from 'react-bootstrap'
import Head from 'next/head';
import styles from '../styles/App.module.css'


//const inter = Inter({ subsets: ['latin'] })
const montserratFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const metadata = {
  title: 'R & S Constructions | General Contractor & Home Remodeling',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name='author' content='Ryan Abeysinghe' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>

      <html lang="en">
        <body>
          <div className={`${montserratFont.className} font-sans w-full min-h-screen bg-ivory`}>
            <NavigationBar />
            <div className='max-w-[1920px] mx-auto'>
              {children}
            </div>
          </div>
         </body>
      </html>
    </>
  )
}


