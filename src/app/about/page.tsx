"use client"
import { FC } from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Image from 'next/image';
import { ThemeProvider } from 'next-themes';
import '../globals.css'

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <>
       <ThemeProvider attribute="class">
      <Navbar />
      <div className='flex justify-center'>
        <div className='max-w-6xl w-full p-8'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
            <div className='md:col-span-5'>
              <img className="h-full w-full object-cover" src="./Art1.jpg" alt="" />
            </div>
            <div className='md:col-span-7 flex flex-col justify-center'>
              <h2 className='text-4xl font-bold mb-6'>About the artist</h2>
              <p className='text-sm mb-6'>Birthday</p>
              <p className='text-sm mb-6'>She/her</p>
              <p className='text-lg mb-6'>
              I was born and raised in colorado. I have been doing oil and acrylic painting for about 7 years now. Art has always helped relax and sooth my anxieties.. I live with my cat in Denver and paint in my spare time.
              </p>
              <p className='text-lg mb-6'>
              -------------------------------
              </p>
              <p className='text-lg'>
              -------------------------------
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center md:flex-row md:mt-12'>
            <div className='flex flex-col justify-center mb-8 md:mb-0'>
              <h3 className='text-2xl font-bold mb-6'>Join Our Community</h3>
              <p className='text-lg mt-0'>
              Be part of our creative community and stay connected with fellow artists, art lovers.
              </p>
              <a href="https://discord.com/app" className="mt-4 px-8 py-4 text-base font-semibold text-black uppercase bg-transparent hover:bg-black hover:text-white rounded-full transition-colors duration-200 flex items-center justify-center border-2 border-black">
                Join Now
              </a>
            </div>
            <div className='ml-0 md:ml-8'>
              <Image
                className='w-[519px] h-[313px] object-cover'
                src='/Art5.jpg'
                alt='Community Image'
                width={519}
                height={313}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </ThemeProvider>
    </>
  );
};

export default Page;
