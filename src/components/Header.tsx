'use client'

import Link from 'next/link';
import styles from '../styles/Header.module.css';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = scrollPosition > 100 ? `${styles.header} ${styles.headerScrolled}` : styles.header;

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          BeteK
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;