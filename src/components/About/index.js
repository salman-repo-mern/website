import React from 'react';
import { Shield, Award, CheckCircle, Sparkles , BadgeCheck, Building2 } from 'lucide-react';
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
                  src="https://www.youtube.com/embed/TDcmSxRqh0g"
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
                At Bismi Fresh Foods, we don’t just make food — we preserve heritage. 
                Every bite tells a story of tradition, crafted with care using time-honored recipes and quality ingredients.
              </p>
              <p className="paragraph">
                From soft, layered parotas to golden pooris and homestyle sweets, our products bring the comfort of authentic Indian flavors right to your plate
                 — fresh, flavorful, and made with love.
              </p>
              <div className="leadership-info">
                <div className='leadership-container'>
                   <p className="leadership-text">
                  <strong  >K K Jabreen Afreen</strong> 
                  <br/><span> Proprietor</span>
                </p>
              <p className="leadership-text">
                  <strong  >Khader Ali</strong>
                  <br/><span>CEO</span>
                </p>
                </div>
              </div>
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
              <p className="icon-text">License No: 20124251000486</p>
            </div>

            <div className="trust-box animate-bounce-in delay-1">
              <div className="icon-circle">
                <Award size={32} />
              </div>
              <h4 className="icon-title">Trademark Certified</h4>
              <p className="icon-text">License No: 5777549</p>
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
            <div className="trust-box animate-bounce-in delay-4">
            <div className="icon-circle">
              <BadgeCheck size={32} /> 
            </div>
            <h4 className="icon-title">GSTIN</h4>
            <p className="icon-text">No: 37DPVPA0357F1ZT</p>
          </div>

          <div className="trust-box animate-bounce-in delay-5">
            <div className="icon-circle">
              <Building2 size={32} /> 
            </div>
            <h4 className="icon-title">MSME Certified</h4>
            <p className="icon-text">No: UDYAM-AP-02-0019456</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
