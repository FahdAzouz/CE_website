import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const timeline = [
  { year: 2000, event: 'Company Founded', description: 'BeteK was established with a vision to revolutionize civil engineering.' },
  { year: 2010, event: 'Expansion', description: 'Opened new offices in major cities across the country.' },
  { year: 2015, event: 'Innovation Award', description: 'Received national recognition for sustainable engineering practices.' },
  { year: 2023, event: 'Global Projects', description: 'Expanded operations to international markets.' },
];

const teamMembers = [
  { name: 'John Doe', position: 'Chief Engineer', image: '/images/john-doe.jpg' },
  { name: 'Jane Smith', position: 'Project Manager', image: '/images/jane-smith.jpg' },
  // Add more team members as needed
];

const values = [
  { title: 'Innovation', description: 'Pushing the boundaries of civil engineering with cutting-edge solutions.' },
  { title: 'Sustainability', description: 'Committed to environmentally responsible engineering practices.' },
  { title: 'Integrity', description: 'Upholding the highest standards of professional ethics in all our work.' },
  { title: 'Collaboration', description: 'Fostering teamwork and partnerships to achieve exceptional results.' },
];

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.hero}>
        <h1>About Our Engineering Excellence</h1>
        <p>Innovative solutions for complex civil engineering challenges</p>
      </section>

      <section className={styles.history}>
        <h2>Our History</h2>
        <div className={styles.timelineContainer}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDate}>{item.year}</div>
              <div className={styles.timelineContent}>
                <h3>{item.event}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.team}>
        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <Image src={member.image} alt={member.name} width={200} height={200} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueItem}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;