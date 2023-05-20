import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className='p-[3.3vmax] justify-center max-w-full z-0 flex w-full box-content relative m-0 bg-[#F1ECE3]'>
      <div className='block'>
        <div className='relative h-full w-full block'>
          <div className='grid grid-cols-1 md:grid-cols-9 md:grid-rows-5'>
            <div className='md:col-start-2 md:col-end-10 md:row-start-1 md:row-end-6 z-0 pr-[10rem]'>
              <div className='justify-start flex h-full w-full flex-col pt-0 pb-0'>
                <div className='outline-none'>
                  <div className='mb-0 mt-0 md:ml-0 ml-[6rem] break-words outline-none'>
                    <h3 className='text-center whitespace-pre-wrap mt-0 text-black m-[1rem] text-3xl'>Kayl The Snail</h3>
                    <p className='text-center whitespace-pre-wrap m-1 text-black underline'>
                      <a href='/' className='inline-block break-word p-2'>Commissions</a>
                      <a href='/' className='inline-block break-word p-2'>Donations</a>
                      <a href='/' className='inline-block break-word p-2'>Shop</a>
                    </p>
                    <p className='text-center whitespace-pre-wrap mb-0 m-1 text-black'>Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
