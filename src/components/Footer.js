// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>© 2025 My Blog. All rights reserved.</p>
      <p>
        Follow me on:
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/x.png"
            alt="X (formerly Twitter)"
            style={{ width: '24px', height: '24px', margin: '0 5px' }}
          />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/facebook.png"
            alt="Facebook"
            style={{ width: '24px', height: '24px', margin: '0 5px' }}
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/instagram.png"
            alt="Instagram"
            style={{ width: '24px', height: '24px', margin: '0 5px' }}
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/linkedin.png"
            alt="LinkedIn"
            style={{ width: '24px', height: '24px', margin: '0 5px' }}
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/youtube.png"
            alt="YouTube"
            style={{ width: '24px', height: '24px', margin: '0 5px' }}
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;