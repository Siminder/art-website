import { FC } from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Image from 'next/image';

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <>
    <Navbar/>
      <div className='flex justify-center'>
        
        <div className='max-w-6xl w-full p-8'>
          <div className='grid grid-cols-12 gap-8'>
            <div className='col-span-5'>
              <img className="h-full w-full object-cover" src="./Art1.png" alt="" />
            </div>
            <div className='col-span-7 flex flex-col justify-center'>
              <h2 className='text-4xl font-bold mb-6'>About the artist</h2>
              <p className='text-sm mb-6'>Birthday</p>
              <p className='text-sm mb-6'>She/her</p>
              <p className='text-lg mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor ullamcorper justo, et lobortis massa efficitur id. Sed vehicula consequat malesuada. Nulla facilisi. Mauris auctor nibh id augue maximus interdum.
              </p>
              <p className='text-lg mb-6'>
                Donec gravida lorem sit amet neque consequat, vitae congue neque tempor. Sed eget fringilla ex, vel bibendum eros. Nam euismod, urna id auctor eleifend, elit ligula aliquet lacus, at placerat mauris dolor non odio.
              </p>
              <p className='text-lg'>
                Ut vel nisl consectetur, ullamcorper nunc in, posuere orci. Donec volutpat ex eget ultricies tincidunt. Nulla facilisi. Proin nec mi tincidunt, posuere est ut, fringilla ligula. Nam facilisis, mi id tincidunt volutpat, sem erat fringilla neque, id facilisis odio lorem at risus.
              </p>
            </div>
          </div>
  
          <div className='flex items-center mt-12'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-bold mb-10'>Join Our Community</h3>
              <p className='text-lg mt-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor ullamcorper justo, et lobortis massa efficitur id.
                
              </p>
              <a href="https://discord.com/app" className="mt-4 px-8 py-4 text-base font-semibold text-black uppercase bg-transparent hover:bg-black hover:text-white rounded-full transition-colors duration-200 flex items-center justify-center border-2 border-black">
                    Join Now
                  </a>
  
            </div>
            <div className='ml-8'>
              <Image
                className='w-[519px] h-[313px] object-cover '
                src='/Art5.png'
                alt='Community Image'
                width={519}
                height={313}
              />
            </div>
          </div>
        </div>
     
      </div>
      <Footer/>
   </>
    );
}

export default page