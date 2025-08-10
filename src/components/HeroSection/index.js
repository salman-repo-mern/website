import { useEffect, useState, useRef } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { ArrowDown } from 'lucide-react';
import './index.css';


// Use landscape/wid e images for larger screens
const desktopImageUrls = [
 "https://5.imimg.com/data5/ANDROID/Default/2023/4/303104669/DX/EH/BR/20956119/product-jpeg-500x500.jpg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/6/313459445/II/XK/UK/20956119/product-jpeg-500x500.jpg",
  "https://tastythriftytimely.com/wp-content/uploads/2025/06/Chapati-7.jpg",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/bvrtu4exc6ypkhlyxazq",
  "https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279537/Screenshot_2025-08-04_092054_qqn5px.png",
  "https://5.imimg.com/data5/SELLER/Default/2023/10/350801823/EX/NU/UQ/20956119/new-product-500x500.jpeg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/4/303105557/UR/BH/OT/20956119/product-jpeg-500x500.jpg",
  "https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279720/Screenshot_2025-08-04_092501_erdbxc.png",
];

// Use portrait/square images for smaller screens for a better fit
const mobileImageUrls = [
 "https://5.imimg.com/data5/ANDROID/Default/2023/4/303104669/DX/EH/BR/20956119/product-jpeg-500x500.jpg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/6/313459445/II/XK/UK/20956119/product-jpeg-500x500.jpg",
  "https://tastythriftytimely.com/wp-content/uploads/2025/06/Chapati-7.jpg",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/bvrtu4exc6ypkhlyxazq",
  "https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279537/Screenshot_2025-08-04_092054_qqn5px.png",
  "https://5.imimg.com/data5/SELLER/Default/2023/10/350801823/EX/NU/UQ/20956119/new-product-500x500.jpeg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/4/303105557/UR/BH/OT/20956119/product-jpeg-500x500.jpg",
  "https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279720/Screenshot_2025-08-04_092501_erdbxc.png",];


// Simple SVG Arrow Icons for the slider
const LeftArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

const RightArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const timeoutRef = useRef(null);

  const imageUrls = isMobile ? mobileImageUrls : desktopImageUrls;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, imageUrls]); // Add imageUrls to dependency array

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imageUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="home" className="hero-section">
      <div
        className="hero-background"
        key={imageUrls[currentIndex]}
        style={{ backgroundImage: `url(${imageUrls[currentIndex]})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <button onClick={goToPrevious} className="hero-nav-button left">
        <LeftArrowIcon />
      </button>

      <button onClick={goToNext} className="hero-nav-button right">
        <RightArrowIcon />
      </button>

      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Bismi Fresh Foods</h1>
        <p className="hero-subtitle">
          Good for Health & 100% pure Veg
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProducts}>
            View Products <ArrowDown className="icon" />
          </button>
          <button
            className="btn-outline"
            onClick={() =>
              window.open(
                'https://wa.me/+916300414449?text=' +
                  encodeURIComponent('Hello, Can I get more information about this?'),
                '_blank'
              )
            }
          >
            Order on WhatsApp
            <FaWhatsapp
              style={{
                fontSize: '30px',
                marginRight: '8px',
                verticalAlign: 'middle',
                paddingLeft: '7px',
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;