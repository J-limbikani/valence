"use client";

import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

const HeroSect = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto', // Reduce the height of the hero section
        minHeight: '50vh', // Set a minimum height if needed
        backgroundColor: 'inherit', // Use the background from the root (inherited)
        color: '#fff', // White text color
        flexDirection: 'column', // Stack content vertically
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Title */}
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Reach Us</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Contact us via the options below</p>

      {/* Contact Icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '10px', // Add some spacing between text and icons
        }}
      >
        {/* Phone Icon */}
        <a
          href="tel:+26377 296 8026" // Replace with your phone number
          style={{
            fontSize: '2.5rem',
            color: '#25D366',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          title="Call Us"
        >
          <FaPhoneAlt />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+263772968026" // Replace with your WhatsApp number
          style={{
            fontSize: '2.5rem',
            color: '#25D366', // WhatsApp green color
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          title="Message Us on WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:info@valence.co.zw" // Replace with your email address
          style={{
            fontSize: '2.5rem',
            color: '#25D366',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          title="Email Us"
        >
          <FaEnvelope />
        </a>

        {/* Telegram Icon */}
        <a
          href="https://t.me/@valence" // Replace with your Telegram username
          style={{
            fontSize: '2.5rem',
            color: '#25D366', // Telegram blue color
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          title="Message Us on Telegram"
        >
          <FaTelegramPlane />
        </a>

        {/* GPS / Location Icon */}
        <a
          href="https://maps.app.goo.gl/mfpgUkxKr2BJX2jU7" // Your location link or Replace with your Google Maps location URL
          style={{
            fontSize: '2.5rem',
            color: '#25D366', // Custom color for location icon
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          title="Find Us on Google Maps"
        >
          <FaMapMarkerAlt />
        </a>
      </div>
    </div>
  );
};

export default HeroSect;
