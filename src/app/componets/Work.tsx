"use client"
import { FC, useEffect, useRef } from 'react';

interface WorkProps {}

const Work: FC<WorkProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const faders = document.querySelectorAll('.fade-in');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -250px 0px',
      };

      const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      }, appearOptions);

      faders.forEach((fader) => {
        appearOnScroll.observe(fader);
      });
    }
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-[4vw]" ref={containerRef}>
      <div className="flex flex-col gap-5">
        <img className="h-[846px] w-full fade-in" src="./Art1.png" alt="" />
        <img className="h-[837px] w-full fade-in" src="./Art2.png" alt="" />
        <img className="h-[586px] w-full fade-in" src="./Art1.png" alt="" />
        <img className="h-[747px] w-full fade-in" src="./Art4.png" alt="" />
      </div>

      <div className="flex flex-col gap-5">
        <img className="h-[550px] w-full fade-in" src="./Art4.png" alt="" />
        <img className="h-[261px] w-full fade-in" src="./Art5.png" alt="" />
        <img className="h-[308px] w-full fade-in" src="./Art6.png" alt="" />
        <img className="h-[261px] w-full fade-in" src="./Art5.png" alt="" />
        <img className="h-[586px] w-full fade-in" src="./Art3.png" alt="" />
        <img className="h-[751px] w-full fade-in" src="./Art7.png" alt="" />
      </div>

      <div className="flex flex-col gap-5">
        <img className="h-[410px] w-full fade-in" src="./Art7.png" alt="" />
        <img className="h-[289px] w-full fade-in" src="./Art8.png" alt="" />
        <img className="h-[851px] w-full fade-in" src="./Art9.png" alt="" />
        <img className="h-[329px] w-full fade-in" src="./Art12.png" alt="" />
        <img className="h-[409px] w-full fade-in" src="./Art7.png" alt="" />
        <img className="h-[585px] w-full fade-in" src="./Art5.png" alt="" />
      </div>

      <div className="flex flex-col gap-5">
        <img className="h-[578px] w-full fade-in" src="./Art10.png" alt="" />
        <img className="h-[412px] w-full fade-in" src="./Art11.png" alt="" />
        <img className="h-[528px] w-full fade-in" src="./Art12.png" alt="" />
        <img className="h-[295px] w-full fade-in" src="./Art6.png" alt="" />
        <img className="h-[501px] w-full fade-in" src="./Art12.png" alt="" />
      </div>
    </div>
  );
};

export default Work;
