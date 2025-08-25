import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar } from 'lucide-react';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_s2vxdbl',
      'template_rivdydm',
      {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
      },
      'UsKdsRw03xFZJXak-'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', address: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions about our products or want to place a bulk order? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          <div className="form-container">
            <h3 className="form-title">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Contact Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="submit-btn">
                  <Send size={18} />
                  Send Message
                </button>
              </div>

              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  <p>Message Sent! Thank you for reaching out. We'll get back to you soon!</p>
                </div>
              )}
            </form>
          </div>

          <div className="info-column">
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.392387755359!2d79.1000!3d13.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad42c6d21e!2sGoolingspet%20Street%2C%20Chittoor%2C%20Andhra%20Pradesh%20517001!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bismi Fresh Foods Location"
              ></iframe>
            </div>

            <div className="details-container">
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Phone className="icon" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <h4 className="detail-title">Phone</h4>
                  <a href="tel:+916300414449" className="detail-link">+91 63004 14449</a>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Mail className="icon" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <h4 className="detail-title">Email</h4>
                  <a href="mailto:khaderali.1988@gmail.com" className="detail-link">khaderali.1988@gmail.com</a>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-wrapper">
                  <MapPin className="icon" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="address-description">
                  <h4 className="detail-title">Address</h4>
                  <p  style={{marginLeft:'0px'}}>
                    <a className="detail-text" href="https://www.google.com/maps?q=No.14+G+1133,+Goolingspet+Street,+Chittoor,+Andhra+Pradesh,+517001" 
                  target="_blank" rel='noreferrer'>
                  No.14 G 1133, Goolingspet Street, Chittoor, Andhra Pradesh, 517001
             </a>
                  </p>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Calendar className="icon" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <h4 className="detail-title">Established</h4>
                  <p className="detail-text">
                    Since 2016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
