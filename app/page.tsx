'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const artworks = [
    {
      title: 'Artwork Title 1',
      medium: 'Oil on Canvas',
      year: '2024',
      image: '/images/artwork1.jpg' // Replace with actual image path
    },
    {
      title: 'Artwork Title 2',
      medium: 'Acrylic',
      year: '2024',
      image: '/images/artwork2.jpg'
    },
    {
      title: 'Artwork Title 3',
      medium: 'Watercolor',
      year: '2023',
      image: '/images/artwork3.jpg'
    },
    {
      title: 'Artwork Title 4',
      medium: 'Oil on Canvas',
      year: '2023',
      image: '/images/artwork4.jpg'
    },
    {
      title: 'Artwork Title 5',
      medium: 'Mixed Media',
      year: '2023',
      image: '/images/artwork5.jpg'
    },
    {
      title: 'Artwork Title 6',
      medium: 'Acrylic',
      year: '2022',
      image: '/images/artwork6.jpg'
    },
  ]

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalImage('')
  }

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Adelez</div>
          <ul className={styles.navLinks}>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Adelez</h1>
          <p>Artist & Painter</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={styles.gallery}>
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <div className={styles.galleryGrid}>
          {artworks.map((artwork, index) => (
            <div 
              key={index} 
              className={styles.artworkCard}
              onClick={() => openModal(artwork.image)}
            >
              <div className={styles.artworkImage}>
                <div className={styles.placeholder}>
                  [Add artwork image here]
                </div>
                {/* Uncomment when you have images:
                <Image 
                  src={artwork.image} 
                  alt={artwork.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                */}
              </div>
              <div className={styles.artworkInfo}>
                <h3 className={styles.artworkTitle}>{artwork.title}</h3>
                <p className={styles.artworkDetails}>{artwork.medium}, {artwork.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2 className={styles.sectionTitle}>About the Artist</h2>
        <div className={styles.aboutContent}>
          <p>
            Welcome to my artistic journey. Through my work, I explore the intersection 
            of color, emotion, and form, creating pieces that invite viewers to pause 
            and reflect.
          </p>
          <p>
            Each painting is a story, a moment captured in time, where technique meets 
            passion. My work draws inspiration from nature, human connection, and the 
            subtle beauty found in everyday moments.
          </p>
          <p>
            Thank you for visiting my gallery. I hope my art resonates with you and 
            brings a moment of joy and contemplation to your day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactInfo}>
          <p>Interested in my work or have questions?</p>
          <p>Feel free to reach out:</p>
          <p><strong>Email:</strong> <a href="mailto:contact@adelez.art">contact@adelez.art</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/adelez.art" target="_blank" rel="noopener noreferrer">@adelez.art</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Adelez. All rights reserved.</p>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <span className={styles.close}>&times;</span>
          <img 
            src={modalImage} 
            alt="Artwork" 
            className={styles.modalContent}
          />
        </div>
      )}
    </>
  )
}
