'use client'

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About Us</h3>
            <p>Tractor is a leading provider of industrial solutions, dedicated to innovation and excellence in engineering.</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <p>123 Industrial Avenue<br />Cityville, State 12345<br />Phone: (123) 456-7890<br />Email: info@tractor.com</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2023 Tractor Industrial Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;