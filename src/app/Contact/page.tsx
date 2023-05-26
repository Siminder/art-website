"use client"
import { FC, useEffect, useState } from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';
import { ThemeProvider } from 'next-themes';
import '../globals.css'

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="flex justify-center">
          <div className="max-w-6xl w-full p-10">
            <h2 className="text-4xl font-bold mb-8">Contact me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-4">
                  {isSmallScreen
                    ? <ul className='space-y-2'>
                        <li>
                          <a>youremail@gmail.com</a>
                        </li>
                        <li>
                          <a>Instagram handle</a>
                        </li>
                        <li>
                          <a>Twitter</a>
                        </li>
                        <li>
                          <a>Discord</a>
                        </li>
                        <li>
                          <a>Other</a>
                        </li>
                    </ul>
                    : "I would love to hear from you! If you have any questions, commission, or would like to discuss a potential collaboration, please don't hesitate to reach out. "}
                </p>
                <p className="mb-4">Discord: Kayl The Snail#5507  </p>
                <p className="mb-4">Email: example@example.com</p>
                <p>Social Media :</p>
                <div className="flex items-center space-x-2 sm:space-x-4 pt-1">
                  <a href="https://www.instagram.com/kaylsthesnail/" className="">
                    <Instagram />
                  </a>
                  <a href="https://twitter.com/SnailKayl" className="">
                    <Twitter />
                  </a>
                  <a href="https://www.youtube.com" className="">
                    <YouTube />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img className="w-full h-[500px] " src="/Art5.jpg" alt="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default Contact;
