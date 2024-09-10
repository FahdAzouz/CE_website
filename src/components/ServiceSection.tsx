'use client';  // Add this at the top of the file

import styles from '../styles/ServiceSection.module.css';

const services = [
  {
    id: 1,
    title: 'Oil & Gas Energy',
    description: 'Innovative solutions for the energy sector',
    icon: '🛢️',
  },
  {
    id: 2,
    title: 'Industrial Construction',
    description: 'Building the future of industry',
    icon: '🏗️',
  },
  {
    id: 3,
    title: 'Chemical Engineering',
    description: 'Advanced chemical processes and materials',
    icon: '⚗️',
  },
];

export default function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}