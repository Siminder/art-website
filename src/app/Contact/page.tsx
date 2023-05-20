"use client"
import { FC, useEffect, useState } from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';

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
                    : '(contact for commission or whatever u want it to say) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et neque nec odio pellentesque tristique. Ut fringilla, sem in tincidunt luctus, nulla leo euismod arcu, eget maximus magna metus vel ligula.'}
                </p>
                <p className="mb-4">Phone: (if u want to)</p>
                <p className="mb-4">Email: example@example.com</p>
                <p>Social Media :</p>
                <div className="flex items-center space-x-2 sm:space-x-4 pt-1">
                  <a href="https://www.instagram.com" className="">
                    <Instagram />
                  </a>
                  <a href="https://twitter.com" className="">
                    <Twitter />
                  </a>
                  <a href="https://www.youtube.com" className="">
                    <YouTube />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img className="w-full h-[336px] " src="/Art15.png" alt="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
