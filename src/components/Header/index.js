import { useState, useEffect } from 'react';
import './index.css';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  // Observe scroll position
  useEffect(() => {
    const sectionIds = ['home', 'about', 'products', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150; // offset for header height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop - offset <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <img src="https://res.cloudinary.com/dusyxcqt9/image/upload/v1754278830/WhatsApp_Image_2025-08-04_at_09.07.28_8721dc89_vtpvx2.jpg" alt="Bismi Fresh Foods Logo" className="logo-img" />
            <h1 className="brand-name">Bismi Fresh Foods</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {['home', 'about', 'products', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <nav className="nav-mobile-links">
              {['home', 'about', 'products', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`nav-link-mobile ${activeSection === id ? 'active' : ''}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
