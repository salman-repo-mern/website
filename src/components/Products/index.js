import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import  { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import './index.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState(null);

  // State for the cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('bismifreshfoods');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart data from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('bismifreshfoods', JSON.stringify(cartItems));
  }, [cartItems]);

   const products = [
    {
      id: 1,
      name: "Parota",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754570864/porota_csrmdh.jpg',
      tag: "Trending",
      description: "Flaky and soft layered flatbread that’s crispy on the outside and tender inside.",
      variations: [
        { quantity: "10 pcs", price: "₹80" }
      ]
    },
    {
      id: 2,
      name: "Chapathi",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754571246/chapati_zn9p4d.png',
      tag: "High Protein",
      description: "Soft, wholesome whole wheat flatbreads that make a healthy and filling meal.",
      variations: [
        { quantity: "10 pcs", price: "₹60" }
      ]
    },
    {
      id: 3,
      name: "Puri",
      image: "https://res.cloudinary.com/dusyxcqt9/image/upload/v1754973819/poori_nsvnvx.jpg",
      tag: "Traditional",
      description: "Golden, puffed-up fried bread that’s perfect with spicy curries or chutneys.",
      variations: [
        { quantity: "10 pcs", price: "₹60" }
      ]
    },
    {
      id: 4,
      name: "Pulka",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754571168/pulka_r3sxu2.jpg',
      tag: "Trending",
      description: "Light and soft flatbreads made without oil, great for a healthy diet.",
      variations: [
        { quantity: "10 pcs", price: "₹60" }
      ]
    },
    {
      id: 5,
      name: "Kothu & Chilly Parota",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279537/Screenshot_2025-08-04_092054_qqn5px.png',
      tag: "Spicy Delight",
      description: "A flavorful and spicy stir-fry made with shredded parota and fresh chillies.",
      variations: [
        { quantity: "300g", price: "₹70" }
      ]
    },
    {
      id: 6,
      name: "Milk Kova",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754570721/kova_afqxls.jpg',
      tag: "Sweet Treat",
      description: "A rich, creamy sweet made by slowly cooking milk to perfection.",
      variations: [
        { quantity: "100g", price: "₹30" },
        { quantity: "250g", price: "₹70" }
      ]
    },
    {
      id: 7,
      name: "Osmania Biscuits",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754570793/osmania_dnfs4n.jpg',
      tag: "Bismi Special",
      description: "Buttery and crunchy biscuits, a perfect companion for your evening tea.",
      variations: [
        { quantity: "24 pcs", price: "₹40" }
      ]
    },
    {
      id: 8,
      name: "Masala Vadiyalu",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754279720/Screenshot_2025-08-04_092501_erdbxc.png',
      tag: "Fry to eat",
      description: "Spicy, crunchy snacks that are ready to fry and enjoy anytime.",
      variations: [
        { quantity: '250g', price: "₹70" }
      ]
    },
    {
      id: 9,
      name: "Jigarthanda",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754564422/Screenshot_2025-08-07_162907_wuw1b8.png',
      tag: "Madurai Traditional",
      description: "A refreshing and creamy cold drink made with milk, almond gum, and ice cream.",
      variations: [
        { quantity: "Standard", price: '₹70' }
      ]
    },
    {
      id: 10,
      name: "Idiyappam",
      image: 'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754563974/Screenshot_2025-08-07_162027_kdyh6k.png',
      tag: "Upcoming",
      description: "Steamed rice noodle nests that are light, soft, and perfect with curry or coconut chutney.",
      variations: []
    }
  ];

  useEffect(() => {
    if (selectedProduct && selectedProduct.variations.length === 1) {
      setSelectedVariation(selectedProduct.variations[0]);
    }
  }, [selectedProduct]);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setSelectedVariation(null);
  };

  const handleAddToCart = (product, variation) => {
    if (!variation) {
      alert("Please select an option.");
      return;
    }
    const cartId = `${product.id}-${variation.quantity}`;
    const existingItem = cartItems.find(item => item.cartId === cartId);

    if (existingItem) {
      handleIncreaseQuantity(cartId);
    } else {
      const newItem = {
        ...product,
        cartId: cartId,
        selectedVariation: variation,
        orderQuantity: 1
      };
      setCartItems(prevItems => [...prevItems, newItem]);
    }
    setIsModalOpen(false);
  };

  // Increases an item's quantity in the cart
  const handleIncreaseQuantity = (cartId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.cartId === cartId
          ? { ...item, orderQuantity: item.orderQuantity + 1 }
          : item
      )
    );
  };

  // Decreases an item's quantity or removes it if it becomes 0
  const handleDecreaseQuantity = (cartId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.cartId === cartId
            ? { ...item, orderQuantity: item.orderQuantity - 1 }
            : item
        )
        .filter(item => item.orderQuantity > 0)
    );
  };

  const handleClearCart = () => {
    setCartItems([]); 
  };

  const handleProceedToWhatsApp = () => {
    if (cartItems.length === 0) return;
    let grandTotal = 0;
    const itemsList = cartItems.map(item => {
      const pricePerUnit = parseInt(item.selectedVariation.price.replace('₹', ''));
      const lineItemTotal = pricePerUnit * item.orderQuantity;
      grandTotal += lineItemTotal;
      return `- *${item.name}* (${item.selectedVariation.quantity}) x ${item.orderQuantity} - ₹${lineItemTotal}`;
    }).join('\n');
    const message = `*New Order from Bismi Fresh Foods Website*\n\nHello, I would like to order the following:\n\n${itemsList}\n\n*Grand Total: ₹${grandTotal}*\n\nPlease confirm availability and payment details. Thank you!`;
    const whatsappUrl = `https://wa.me/+916300414449?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsCartOpen(false);
  };

  // Handler for direct inquiries
  const handleOrder = (productName) => {
    const message = `Hello! I am interested in placing a large order from Bismi Fresh Foods for an event/function.
     Please provide details on pricing, availability, and delivery options.
      Thank you!`;
    const whatsappUrl = `https://wa.me/+916300414449?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const grandTotal = cartItems.reduce((total, item) => {
    const pricePerUnit = parseInt(item.selectedVariation.price.replace('₹', ''));
    return total + (pricePerUnit * item.orderQuantity);
  }, 0);

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Fresh <span className="text-gradient">Products</span></h2>
          <p>Handcrafted with love, delivered fresh to your doorstep</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => product.tag !== 'Upcoming' && openProductModal(product)}
            >
              <div className="product-image">
                {product.tag && <span className="product-badge">{product.tag}</span>}
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className='product-name'>{product.name}</h3>
                <div className="product-meta">
                  {product.variations.length > 0 ? (
                    <>
                      <span className='quantity'>{product.variations.map(v => v.quantity).join(', ')}</span>
                      <span className="price">
                        {product.variations.length > 1 ? `From ${product.variations[0].price}` : product.variations[0].price}
                      </span>
                    </>
                  ) : (
                    <span className="quantity">Coming Soon</span>
                  )}
                </div>
                {product.tag !== "Upcoming" && (
                  <button className="order-button" onClick={(e) => { e.stopPropagation(); openProductModal(product); }}>
                    <ShoppingCart className="icon" />
                    {product.variations.length > 1 ? "Select Options" : "Add to Cart"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-box">
          <h3>Can't decide? Order a combo pack!</h3>
          <p>We also provide large quantities for <b>marriages, events, and functions</b> — freshly made, packed, and delivered on time.</p>
          <div>
            <button onClick={() => handleOrder('Combo Pack')} className="combo-button">
              <FaWhatsapp className='icons' /> Order via WhatsApp
            </button>
            <button onClick={() => window.location.href = 'tel:+916300414449'} className="call-button">
              <FaPhone className="icons" /> Call: +91 63004 14449
            </button>
          </div>
        </div>
      </div>

      {cartItems.length > 0 && (
        <button className="floating-cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={24} />
            <span className="cart-item-count">{cartItems.reduce((total, item) => total + item.orderQuantity, 0)}</span>
        </button>
      )}

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}><X size={19} /></button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="modal-details">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <div className="variations-container">
                <h4>Select Option:</h4>
                <div className="variation-buttons">
                  {selectedProduct.variations.map((variation, index) => (
                    <button
                      key={index}
                      className={`variation-btn ${selectedVariation === variation ? 'active' : ''}`}
                      onClick={() => setSelectedVariation(variation)}
                    >
                      {variation.quantity} - {variation.price}
                    </button>
                  ))}
                </div>
              </div>
              {selectedProduct.tag !== 'Upcoming' && (
                <button 
                  onClick={() => handleAddToCart(selectedProduct, selectedVariation)} 
                  className="modal-order-btn"
                  disabled={!selectedVariation}
                >
                  <ShoppingCart size={18} /> 
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content cart-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsCartOpen(false)}><X size={19} /></button>
            
            <div >
              <h2 className="cart-heading">Your Cart 🛒</h2>
            </div>

            {cartItems.length > 0 ? (
              <>
                <div className="cart-items-list">
                  {cartItems.map(item => (
                    <div key={item.cartId} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>{item.selectedVariation.price} | {item.selectedVariation.quantity}</p>
                      </div>
                      <div className="quantity-controls">
                        <button onClick={() => handleDecreaseQuantity(item.cartId)} className="quantity-btn"><Minus size={14} /></button>
                        <span className="quantity-display">{item.orderQuantity}</span>
                        <button onClick={() => handleIncreaseQuantity(item.cartId)} className="quantity-btn"><Plus size={14} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-total-container">
                  <span>Grand Total</span>
                  <span className="cart-total-price">₹{grandTotal}</span>
                </div>
                <div className="cart-header">
                  <button onClick={handleClearCart} className="clear-cart-btn">Clear All</button>
                <button onClick={handleProceedToWhatsApp} className="modal-order-btn cart-proceed-btn">
                  Confirm Order
                </button>
                </div>
              </>
            ) : (
              <div className="empty-cart-view">
                <img src="https://res.cloudinary.com/dusyxcqt9/image/upload/v1755009341/empty_cart_ddthrt.png" alt="Empty Cart" className="empty-cart-image" />
                <h3>Your Cart is Empty!</h3>
                <p>Looks like you haven't added anything yet.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;