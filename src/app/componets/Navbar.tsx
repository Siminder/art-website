"use client"
import { FC, useState } from 'react';
import { Instagram, MailOutlineOutlined, Twitter, FacebookOutlined, Menu, Close, LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import '../globals.css'
import Image from 'next/image';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-2 w-full box-border pt-[2.4vw] pb-[2.4vw] pl-[4vw] pr-[4vw] pointer-events-auto">
      <div className="relative flex w-full box-border flex-start justify-between items-center">
        <div className="flex flex-nowrap grow-1 shrink-0 basis-[67%] align-items-center">
          <div className="grow-1 shrink-1">
            <nav className="flex-wrap hidden md:flex mt-[2vw]">
              <div className="mr-[2vw] m,t- whitespace-nowrap">
                <a href="/">Works</a>
              </div>
              <div className="mr-[2vw] whitespace-nowrap">
                <a href="../about/">About</a>
              </div>
              <div className="mr-[2vw] whitespace-nowrap">
                <a href="https://www.etsy.com/ca/?ref=lgo">Shop</a>
              </div>
              <div className="mr-[2vw] whitespace-nowrap">
                <a href="../Contact/">Contact</a>
              </div>
            </nav>
          </div>

          {/* Title */}
          <div className="w-[34%] text-center flex-grow-1 flex-shrink-1 basis-[34%] mx-auto hidden md:block">
            <div className="w-auto text-0">
              <div className="text-center">
                <a href="/" className="flex justify-center ml-[10rem]">
                  <Image
                  src="/logo2.jpg"
                  width={120}
                  height={120}
                  alt='logo'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <button className="text-black md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>
        <p className={`absolute top-0 left-0 md:hidden ${isMenuOpen ? 'z-0' : 'z-10'}`}>
          <img src='./logo2.jpg' className='w-5 h-5'/>
        </p>

        {/* Dropdown Menu */}
        {isMenuOpen && (
        <div className={`md:hidden absolute top-0 right-0 left-0 z-10 ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <div className={`py-2 ${currentTheme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
              <a href="/" className="block px-4 py-2">
                Works
              </a>
              <a href="../about/" className="block px-4 py-2">
                About
              </a>
              <a href="/" className="block px-4 py-2">
                Shop
              </a>
              <a href="../Contact/" className="block px-4 py-2">
                Contact
              </a>
              <div className="flex justify-end pr-4 object-right-top">
                <button
                  className="text-gray-600 hover:text-black focus:outline-none"
                  onClick={toggleMenu}
                >
                  <Close />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Icons */}
        <div className="text-black justify-end flex-grow-0 flex-shrink-1 items-center ml-auto hidden md:flex">
          <div className="m-0 flex text-center leading-1 space-x-[3rem]">
            <a
              href="/"
              className={`relative block box-content leading-1 ${
                currentTheme === 'dark' ? 'text-white' : ''
              }`}
            >
              <MailOutlineOutlined />
            </a>
            <a
              href="https://www.instagram.com"
              className={`relative block box-content leading-1 ${
                currentTheme === 'dark' ? 'text-white' : ''
              }`}
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com"
              className={`relative block box-content leading-1 ${
                currentTheme === 'dark' ? 'text-white' : ''
              }`}
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com"
              className={`relative block box-content leading-1 ${
                currentTheme === 'dark' ? 'text-white' : ''
              }`}
            >
              <FacebookOutlined />
            </a>
            <div>
              {currentTheme === 'dark' ? (
                <LightMode
                  className="text-white cursor-pointer"
                  onClick={() => setTheme('light')}
                />
              ) : (
                <DarkMode
                  className="cursor-pointer"
                  onClick={() => setTheme('dark')}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
