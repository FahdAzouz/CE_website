'use client';

import { useState } from 'react';
import styles from '../../styles/TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    quote: "Tractor has been instrumental in our company's growth. Their innovative solutions have helped us stay ahead of the competition.",
    name: "John Doe",
    position: "CEO, Tech Corp"
  },
  {
    id: 2,
    quote: "The team at Tractor is professional, responsive, and delivers results. We couldn't be happier with their services.",
    name: "Jane Smith",
    position: "Operations Manager, Energy Inc"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.testimonialContainer}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonial} ${index === currentTestimonial ? styles.active : ''}`}
            >
              <p className={styles.quote}>{testimonial.quote}</p>
              <p className={styles.author}>{testimonial.name}</p>
              <p className={styles.position}>{testimonial.position}</p>
            </div>
          ))}
        </div>
        <div className={styles.navigation}>
          <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>&lt;</button>
          <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}>&gt;</button>
        </div>
      </div>
    </section>
  );
}