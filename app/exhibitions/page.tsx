'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { exhibitions } from '../artworks'

export default function Exhibitions() {
  return (
    <section id="exhibitions" className={styles.exhibitionsWrapper}>
      <h2 className={styles.sectionTitle}>Exhibitions</h2>

      <div className={styles.exhibitionsList}>
        {exhibitions.map((exhibition, index) => (
          <div key={index} className={styles.exhibitionItem}>
            <div className={styles.exhibitionImage}>
                <Image
                    src={exhibition.image}
                    alt={exhibition.name}
                    width={300}
                    height={200}
                    style={{ 
                    width: '100%', 
                    height: 'auto',
                    objectFit: 'contain' 
                    }}
                />
                </div>
            
            <div className={styles.exhibitionContent}>
              <h3 className={styles.exhibitionName}>{exhibition.name}</h3>
              <p className={styles.exhibitionDate}>{exhibition.date}</p>
              <p className={styles.exhibitionLocation}>{exhibition.location}</p>
              {exhibition.link && (
                <a 
                  href={exhibition.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.exhibitionLink}
                >
                  View Exhibition →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
