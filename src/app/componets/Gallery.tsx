import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import '../globals.css';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true });
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Array of image URLs
  const images: string[] = [
    "./Art1.jpg",
    "./Art2.jpg",
    "./Art3.jpg",
    "./Art4.jpg",
    "./Art5.jpg",
    "./Art6.jpg",
    "./Art7.jpg",
    "./Art8.jpg",
    "./Art9.jpg",
    "./Art10.jpg",
    "./Art11.jpg",
    "./Art12.jpg",
    "./Art13.jpg",
    "./Art14.jpg",
    "./Art15.jpg",
    "./Art16.jpg",
    "./Art17.jpg",
    "./Art18.jpg",
    "./Art19.jpg",
    "./Art20.jpg",
    // Add more images
  ];

  const openImage = (index: number) => {
    setCurrentImage(index);
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  const navigateImage = (direction: number) => {
    if (currentImage !== null) {
      const newIndex = currentImage + direction;
      if (newIndex >= 0 && newIndex < images.length) {
        setCurrentImage(newIndex);
      }
    }
  };

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (inView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
            }
          });
        },
        { rootMargin: '0px 0px -50% 0px' } // Adjust the rootMargin to control the trigger point
      );

      const galleryElement = galleryRef.current;
      if (galleryElement) {
        const imageElements = galleryElement.querySelectorAll('.image-container');
        imageElements.forEach((element) => {
          observer.observe(element);
        });
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [inView]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="masonry-grid" ref={galleryRef}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {images.map((imageUrl, index: number) => (
          <div
            key={index}
            className={`relative overflow-hidden image-container ${index < 4 && 'fade-in'}`}
            onClick={isMobile ? undefined : () => openImage(index)}
            ref={index === 3 ? ref : undefined}
          >
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              className="w-full h-full object-cover"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        ))}
      </Masonry>
      {currentImage !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={images[currentImage]}
              alt={`Image ${currentImage}`}
              className="opened-image"
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 left-[-20rem] text-[2rem] p-4 text-white hover:text-gray-300 focus:outline-none"
              onClick={() => navigateImage(-1)}
            >
              &larr;
            </button>
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-[-20rem]  text-[2rem] p-4 text-white hover:text-gray-300 focus:outline-none"
              onClick={() => navigateImage(1)}
            >
              &rarr;
            </button>
            <button
              className="absolute top-0 right-0 p-4 text-white font-bold  hover:text-gray-300 focus:outline-none"
              onClick={closeImage}
            >
              &#x2716;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
