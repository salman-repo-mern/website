import "./index.css";
import { 
  FaHeart, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaInstagram, 
  FaWhatsapp ,
  FaFacebook
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Mobile Footer */}
        <div className="mobile-footer">
    <div className="footer-top-row">
      <div className="footer-brand">
        <h3 className="footer-title">Bismi Fresh Foods {' '}<FaHeart className="icon heart" /></h3>
        <div className="bold-text">Delivery Hours</div>
          <div>Mon-Sat 7:00 AM - 10:00 PM</div>
          <div>Sunday 7:00 AM - 02:00 PM</div>
  
          </div>
          <div className="footer-social">
            <button
              className="social-button"
              onClick={() => window.open("https://www.youtube.com/@khaderali8379", "_blank")}
            >
              <FaYoutube className="button-icon" />
            </button>
            <button
              className="social-button"
              onClick={() => window.open("https://instagram.com/bismi_fresh_foods_", "_blank")}
            >
              <FaInstagram className="button-icon" />
            </button>
            <button
              className="social-button"
              onClick={() => window.open("https://instagram.com/ammakıroti", "_blank")}
            >
              <FaFacebook className="button-icon" />
            </button>
          </div>
        </div>

      <div className="footer-contact">
        <div className="contact-row">
          <FaPhoneAlt className="icon" />
          <span>+91 63004 14449</span>
        </div>
        <button
          className="whatsapp-button"
          onClick={() => window.open("https://wa.me/916300414449", "_blank")}
        >
          <FaWhatsapp className="icon" />
          Order on WhatsApp
        </button>
      </div>

      <p className="footer-quote">
        © 2025 Bismi Fresh Foods. All rights reserved.
      </p>
    </div>


        {/* Desktop Footer */}
        <div className="desktop-footer">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-section">
              <div className="footer-brand">
                <h3 className="footer-title">Bismi Fresh Foods</h3>
              </div>
              <p className="footer-description">
                Fresh rotis and parathas made with love every morning, delivered
                to your doorstep with the warmth of home.
              </p>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-row">
                <FaPhoneAlt className="icon" />
                  <a href="tel:+916300414449" className="contact-number">+91 63004 14449</a>
              </div>
              <div className="contact-row">
                <IoMdMailOpen className="icon" />
                 <a href="mailto:khaderali.1988@gmail.com" className="contact-number">khaderali.1988@gmail.com</a>
              </div>
              <div className="contact-row">
                <FaMapMarkerAlt className="icon" />
                <span>
                No.14 G 1133, <br/> Goolingspet Street, Chittoor <br/> Andhra Pradesh, 517001 
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="footer-section">
              <h4 className="footer-heading">Fresh Daily</h4>
              <div className="contact-row">
                <FaClock className="icon" />
                <div>
                  <div className="bold-text">Delivery Hours</div>
                  <div>Mon-Sat 7:00 AM - 10:00 PM</div>
                   <div>Sunday 7:00 AM - 02:00 PM</div>
                </div>
              </div>
              
            </div>

            {/* Social */}
            <div className="footer-section">
              <h4 className="footer-heading">Connect with Us</h4>
             <button
              className="social-button"
              onClick={() =>
                window.open(
                  "https://wa.me/916300414449?text=Hi%21%20I%20would%20like%20to%20know%20about%20from%20Bismi%20Fresh%20Foods.",
                  "_blank"
                )
              }
            >
              <FaWhatsapp className="button-icon" />
            </button>
              <button
                className="social-button"
                onClick={() => window.open("https://instagram.com/bismi_fresh_foods_", "_blank")}
              >
                <FaInstagram className="button-icon" />                
              </button>
              <button
                className="social-button"
                onClick={() => window.open("https://www.youtube.com/@khaderali8379", "_blank")}
              >
                <FaYoutube className="button-icon" />
              </button>
              <button
                className="social-button"
                onClick={() => window.open("https://www.youtube.com/@khaderali8379", "_blank")}
              >
                <FaFacebook className="button-icon" />
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Bismi Fresh Foods. All rights reserved.</p>
            <p>Fresh • Authentic • Delivered with Love</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
