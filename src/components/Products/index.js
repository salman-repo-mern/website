import { ShoppingCart } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa6";

import './index.css';


const Products = () => {
  const products = [
    {
      id: 1,
      name: "Parota",
      image: 'https://5.imimg.com/data5/ANDROID/Default/2023/4/303104669/DX/EH/BR/20956119/product-jpeg-500x500.jpg',
      quantity: "300g (6 pcs)",
      price: "₹60",
      tag: "Homemade",
    },
    {
      id: 2,
      name: "Puri",
      image: "https://5.imimg.com/data5/ANDROID/Default/2023/6/313459445/II/XK/UK/20956119/product-jpeg-500x500.jpg",
      quantity: "300g (6 pcs)",
      price: "₹60",
      tag: "Homemade",
    },
    {
      id: 3,
      name: "Kerala Porota",
      image: 'https://tastythriftytimely.com/wp-content/uploads/2025/06/Chapati-7.jpg',
      quantity: "400g (4 pcs)",
      price: "₹120",
      tag: "Top-Selling",
    },
    {
      id: 4,
      name: "Aloo Paratha",
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/bvrtu4exc6ypkhlyxazq',
      quantity: "400g (4 pcs)",
      price: "₹100",
        tag: "Top-Selling",
    },
    {
      id: 5,
      name: "Mixed Veg Paratha",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279537/Screenshot_2025-08-04_092054_qqn5px.png',
      quantity: "400g (4 pcs)",
      price: "₹110",
        tag: "Top-Selling",
    },
    {
      id: 6,
      name: "Milk Kova",
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/350801823/EX/NU/UQ/20956119/new-product-500x500.jpeg',
      quantity: "300g (4 pcs)",
      price: "₹70",
        tag: "Top Pick",
    },
    {
      id: 7,
      name: "Osmania Biscuits",
      image: 'https://5.imimg.com/data5/ANDROID/Default/2023/4/303105557/UR/BH/OT/20956119/product-jpeg-500x500.jpg',
      quantity: "350g (4 pcs)",
      price: "₹40",
        tag: "Hot Item",
    },
    {
      id: 8,
      name: "Masala Vadiyalu",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279720/Screenshot_2025-08-04_092501_erdbxc.png',
      quantity:undefined, // : "400g (4 pcs)",
      price: "₹70",
      tag: "Top-Selling",
    }
  ];

  const handleOrder = (productName) => {
    const message = `Hi! I would like to order ${productName} from Bismi Fresh Foods.`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
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
          <button 
            onClick={() => handleOrder('Combo Pack')}
            className="combo-button"
          >
            Order via WhatsApp  
            <FaWhatsapp className='icons'
        />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
