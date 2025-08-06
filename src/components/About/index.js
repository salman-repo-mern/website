import React from 'react';
import { Shield, Award, CheckCircle, Sparkles } from 'lucide-react';
import './index.css';

const About = () => {
  return (
    <section id="about" className="bismi-about">
      <div className="container" style={{ 'marginTop': '15px' }}>
        {/* Top Half - Video and Description */}
        <div className="top-section">
          <div className="grid-layout">
            {/* Left Side - YouTube Video */}
            <div className="video-wrapper animate-fade-in">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/BNfAf4To73c"
                  title="How Parota is Made"
                  className="iframe"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="description animate-slide-up">
              <h2 className="heading">About Bismi Fresh Foods</h2>
              <p className="paragraph">
                At Bismi Fresh Foods, we bring you the authentic taste of traditional Indian breads and delicacies.
                Our journey began with a passion for preserving the age-old recipes and techniques passed down through generations.
              </p>
              <p className="paragraph">
                Every product is crafted with the finest ingredients, ensuring freshness, quality, and that homemade taste
                you've been looking for. From fluffy parotas to crispy pooris, we deliver tradition to your table.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Half - Trust Indicators */}
        <div className="bottom-section">
          <h3 className="subheading">What Makes Bismi Fresh Products a Trusted Brand</h3>
          <div className="grid-icons">
            <div className="trust-box animate-bounce-in">
              <div className="icon-circle">
                <Shield size={32} />
              </div>
              <h4 className="icon-title">FSSAI Certified</h4>
              <p className="icon-text">License No: 12345678901234</p>
            </div>

            <div className="trust-box animate-bounce-in delay-1">
              <div className="icon-circle">
                <Award size={32} />
              </div>
              <h4 className="icon-title">Trademark Certified</h4>
              <p className="icon-text">Registered & Authentic</p>
            </div>

            <div className="trust-box animate-bounce-in delay-2">
              <div className="icon-circle">
                <CheckCircle size={32} />
              </div>
              <h4 className="icon-title">100% Hygienic</h4>
              <p className="icon-text">Clean & Safe Production</p>
            </div>

            <div className="trust-box animate-bounce-in delay-3">
              <div className="icon-circle">
                <Sparkles size={32} />
              </div>
              <h4 className="icon-title">Fresh Daily</h4>
              <p className="icon-text">Made Fresh Every Day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
