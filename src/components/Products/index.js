import { ShoppingCart } from 'lucide-react';
import { FaWhatsapp , FaPhone} from "react-icons/fa6";

import './index.css';


const Products = () => {
  const products = [
    { 
      id: 1,
      name: "Parota",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754570864/porota_csrmdh.jpg',
      quantity: " 10 pcs",
      price: "₹80",
      tag: "Trending",
    },
        {
      id: 2,
      name: "Chapathi",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754571246/chapati_zn9p4d.png',
      quantity: "10 pcs",
      price: "₹60",
      tag: "High Protein",
    },

    {
      id: 3,
      name: "Puri",
      image: "https://5.imimg.com/data5/ANDROID/Default/2023/6/313459445/II/XK/UK/20956119/product-jpeg-500x500.jpg",
      quantity: "10 pcs",
      price: "₹60",
      tag: "Traditional",
    },
    {
      id: 4,
      name: "Pulka",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754571168/pulka_r3sxu2.jpg',
      quantity: "10 pcs",
      price: "₹60",
        tag: "Trending",
    },
    {
      id: 5,
      name: "Kothu & Chilly Parota",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279537/Screenshot_2025-08-04_092054_qqn5px.png',
      quantity: "300g ",
      price: "₹70",
        tag: "Spicy Delight",
    },
    {
      id: 6,
      name: "Milk Kova",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754570721/kova_afqxls.jpg',
      quantity: "100g , 250g ",
      price: "₹30 , ₹70",
        tag: "Sweet Treat",
    },
    {
      id: 7,
      name: "Osmania Biscuits",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754570793/osmania_dnfs4n.jpg',
      quantity: "24 pcs",
      price: "₹40",
        tag: "Bismi Special",
    },
    {
      id: 8,
      name: "Masala Vadiyalu",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279720/Screenshot_2025-08-04_092501_erdbxc.png',
      quantity:'250g', 
      price: "₹70",
      tag: "Fry to eat",
    },
        {
      id: 9,
      name: "Jigarthanda",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754564422/Screenshot_2025-08-07_162907_wuw1b8.png',
      quantity:undefined, 
      price: '₹70',
      tag: "Madurai Traditional",
    },
    {
      id: 10,
      name: "Idiyappam",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754563974/Screenshot_2025-08-07_162027_kdyh6k.png',
      quantity:undefined, 
      price: undefined,
      tag: "Upcoming",
    }
  ];

  const handleOrder = (productName) => {
    const message = `Hi! I would like to know about ${productName} from Bismi Fresh Foods.`;
    const whatsappUrl = `https://wa.me/+916300414449?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Our Fresh <span className="text-gradient">Products</span>
          </h2>
          <p>
            Handcrafted with love, delivered fresh to your doorstep
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div  
            key={product.id}
            className="product-card"
          >

              <div className="product-image">
                {product.tag && (
                <span className="product-badge">{product.tag}</span>
                )}
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3 className='product-name'>{product.name}</h3>

                <div className="product-meta">
                  <span className='quantity'>{product.quantity}</span>
                  <span className="price">{product.price}</span>
                </div>

                <p className="description">{product.description}</p>

                <button
                  onClick={() => handleOrder(product.name)}
                  className="order-button"
                >
                  <ShoppingCart className="icon" />
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-box">
          <h3>Can't decide? Order a combo pack!</h3>
          <p>Mix and match your favorites for a complete meal experience</p>
          <div>
            <button 
            onClick={() => handleOrder('Combo Pack')}
            className="combo-button"
          >
             <FaWhatsapp className='icons' /> Order via WhatsApp  
          </button>
          <button
            onClick={() => window.location.href = 'tel:+916300414449'}
            className="call-button"
          >
           <FaPhone className="icons"/> Call: +91 63004 14449
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
