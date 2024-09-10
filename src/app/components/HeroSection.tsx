'use client';

import { useState, useEffect } from 'react';
import styles from '../../styles/HeroSection.module.css';

const slides = [
  {
    id: 1,
    subtitle: 'Oil & Gas Energy',
    title: 'Building Up Vision Leading Future',
    image: '/images/hero-bg-1.png',
  },
  {
    id: 2,
    subtitle: 'Manufacturing Excellence',
    title: 'Innovative Solutions for Industry',
    image: '/images/hero-bg-2.png',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.content}>
            <h2 className={styles.subtitle}>{slide.subtitle}</h2>
            <h1 className={styles.title}>{slide.title}</h1>
            <a href="#" className={styles.button}>Learn More</a>
          </div>
        </div>
      ))}
      <div className={styles.navigation}>
        <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>&lt;</button>
        <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>&gt;</button>
      </div>
    </section>
  );
}