"use client"

import { FC } from 'react'
import '../globals.css'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { Instagram, MailOutlineOutlined, Twitter, FacebookOutlined  } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className='relative z-2 w-100% box-border pt-[2.4vw] pb-[2.4vw] pl-[4vw] pr-[4vw] pointer-events-auto border-solid border-black border-2'>
      <div className='relative flex w-100% box-border flex-start justify-start align-items-center'>
        <div className='flex flex-nowrap grow-1 shrink-0 basis-[67%] align-items-center'>
          <div className='grow-1 shrink-1'>
            <nav className='inline-flex flex-wrap'>
              <div className='mr-[2vw] whitespace-nowrap'>
                <a href='/'>
                  Works
                </a>
              </div>
              <div className='mr-[2vw] whitespace-nowrap'>
                <a href='/'>
                  About
                </a>
              </div>
              <div className='mr-[2vw] whitespace-nowrap'>
                <a href='/'>
                  FAQ
                </a>
              </div>
              <div className='mr-[2vw] whitespace-nowrap'>
                <a href='/'>
                  Contact
                </a>
              </div>
            </nav>
          </div>
          
          {/* Title */}
          <div className='w-[34%] text-center grow-1 shrink-1 basis-[34%] mx-auto'>
            <div className='w-auto text-0'>
              <div className='text-center'>
                <a href='/' className="flex justify-center ml-[10rem]">
                  Kayl 
                </a>
              </div>
            </div>
          </div>
        </div>

    {/* Icons */}
        <div className='text-black justify-end grow-0 shrink-1 inline-flex items-center ml-auto'>
          <div className='m-0 flex text-center leading-1 space-x-[3rem]'>
            <a href="/"className='relative block box-content leading-1 '>
                <MailOutlineOutlined/>
            </a>
            <a href="https://www.instagram.com" className='relative block box-content leading-1 '>
                <Instagram/>
            </a>
            <a href="https://twitter.com" className='relative block box-content leading-1 '>
              <Twitter/>
            </a>
            <a  href="https://www.facebook.com" className='relative block box-content leading-1 '>
              <FacebookOutlined />
            </a>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Navbar;
