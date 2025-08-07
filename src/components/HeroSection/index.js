import { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { ArrowDown } from 'lucide-react';
import './index.css';

const imageUrls = [
  "https://5.imimg.com/data5/ANDROID/Default/2023/4/303104669/DX/EH/BR/20956119/product-jpeg-500x500.jpg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/6/313459445/II/XK/UK/20956119/product-jpeg-500x500.jpg",
  "https://tastythriftytimely.com/wp-content/uploads/2025/06/Chapati-7.jpg",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/bvrtu4exc6ypkhlyxazq",
  "https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279537/Screenshot_2025-08-04_092054_qqn5px.png",
  "https://5.imimg.com/data5/SELLER/Default/2023/10/350801823/EX/NU/UQ/20956119/new-product-500x500.jpeg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/4/303105557/UR/BH/OT/20956119/product-jpeg-500x500.jpg",
  "https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279720/Screenshot_2025-08-04_092501_erdbxc.png",
];


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
    }, 3000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${imageUrls[currentIndex]})` }}
      >
        <div className="hero-overlay"></div>
      </div>

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
