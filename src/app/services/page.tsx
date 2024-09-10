import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  {
    title: 'Structural Engineering',
    description: 'Expert structural design and analysis for buildings and infrastructure.',
    image: '/images/structural-engineering.jpg',
  },
  {
    title: 'Transportation Engineering',
    description: 'Innovative solutions for transportation networks and systems.',
    image: '/images/transportation-engineering.jpg',
  },
  // Add more services as needed
];

const processSteps = [
  { number: 1, title: 'Consultation', description: 'Initial meeting to understand project requirements.' },
  { number: 2, title: 'Concept Design', description: 'Developing preliminary designs and solutions.' },
  { number: 3, title: 'Detailed Design', description: 'Creating comprehensive engineering plans.' },
  { number: 4, title: 'Implementation', description: 'Overseeing the execution of the engineering project.' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className={styles.servicesContainer}>
      <section className={styles.hero}>
        <h1>Our Engineering Services</h1>
        <p>Comprehensive solutions for all your civil engineering needs</p>
      </section>

      <section className={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <Image src={service.image} alt={service.title} width={400} height={300} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#" className={styles.learnMore}>Learn More</a>
          </div>
        ))}
      </section>

      <section className={styles.processOverview}>
        <h2>Our Design Process</h2>
        <div className={styles.processSteps}>
          {processSteps.map((step) => (
            <div key={step.number} className={styles.processStep}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Start Your Project?</h2>
        <p>Get in touch with our team of experts today.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Us</a>
      </section>
    </div>
  );
};

export default ServicesPage;