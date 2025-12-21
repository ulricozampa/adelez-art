'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedWork, setSelectedWork] = useState<number | null>(null)

  const artworks = [
    {
      title: 'Artwork Title 1',
      medium: 'Oil on Canvas',
      year: '2024',
      dimensions: '100 x 120 cm',
      image: '/images/artwork1.jpg'
    },
    {
      title: 'Artwork Title 2',
      medium: 'Acrylic on Canvas',
      year: '2024',
      dimensions: '80 x 100 cm',
      image: '/images/artwork2.jpg'
    },
    {
      title: 'Artwork Title 3',
      medium: 'Watercolor',
      year: '2023',
      dimensions: '60 x 80 cm',
      image: '/images/artwork3.jpg'
    },
    {
      title: 'Artwork Title 4',
      medium: 'Oil on Canvas',
      year: '2023',
      dimensions: '100 x 120 cm',
      image: '/images/artwork4.jpg'
    },
    {
      title: 'Artwork Title 5',
      medium: 'Mixed Media',
      year: '2023',
      dimensions: '90 x 110 cm',
      image: '/images/artwork5.jpg'
    },
    {
      title: 'Artwork Title 6',
      medium: 'Acrylic',
      year: '2022',
      dimensions: '70 x 90 cm',
      image: '/images/artwork6.jpg'
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artworks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artworks.length) % artworks.length)
  }

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.artistName}>Adelez</h1>
          <nav className={styles.nav}>
            <a href="#artworks">Artworks</a>
            <a href="#exhibitions">Exhibitions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section className={styles.heroSlider}>
        <div className={styles.slideContainer}>
          <div className={styles.slide}>
            <div className={styles.slideImage}>
              <div className={styles.imagePlaceholder}>
                [Large artwork image here]
              </div>
              {/* Uncomment when you have images:
              <Image 
                src={artworks[currentSlide].image}
                alt={artworks[currentSlide].title}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
              */}
            </div>
          </div>
          <button className={styles.navButton} onClick={prevSlide}>
            <span>‹</span>
          </button>
          <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>
      </section>

      {/* Artworks Grid */}
      <section id="artworks" className={styles.artworks}>
        <div className={styles.artworksContainer}>
          <div className={styles.artworksGrid}>
            {artworks.map((artwork, index) => (
              <div 
                key={index} 
                className={styles.artworkItem}
                onClick={() => setSelectedWork(index)}
              >
                <div className={styles.artworkImageWrapper}>
                  <div className={styles.artworkImagePlaceholder}>
                    [Artwork {index + 1}]
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
                <div className={styles.artworkDetails}>
                  <h3>{artwork.title}</h3>
                  <p>{artwork.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section id="exhibitions" className={styles.exhibitions}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Exhibitions</h2>
          <div className={styles.exhibitionsList}>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2024</div>
              <div className={styles.exhibitionDetails}>
                <h3>Visionary of the Year</h3>
                <p>MoMA, New York</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2024</div>
              <div className={styles.exhibitionDetails}>
                <h3>Most Innovative Contemporary Artist</h3>
                <p>La Biennale di Venezia, Venice</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2023</div>
              <div className={styles.exhibitionDetails}>
                <h3>Artist of the Year</h3>
                <p>Tate Modern, London</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2023</div>
              <div className={styles.exhibitionDetails}>
                <h3>Excellence in Color Theory</h3>
                <p>Fondation Louis Vuitton, Paris</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2022</div>
              <div className={styles.exhibitionDetails}>
                <h3>Master of Contemporary Form</h3>
                <p>The Metropolitan Museum of Art, New York</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2022</div>
              <div className={styles.exhibitionDetails}>
                <h3>Collector's Choice Award</h3>
                <p>Art Basel</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2021</div>
              <div className={styles.exhibitionDetails}>
                <h3>Most Thought-Provoking Exhibition</h3>
                <p>Solomon R. Guggenheim Museum, New York</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2021</div>
              <div className={styles.exhibitionDetails}>
                <h3>Rising Star Recognition</h3>
                <p>Whitney Museum of American Art, New York</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2020</div>
              <div className={styles.exhibitionDetails}>
                <h3>Design Innovation Award</h3>
                <p>Cooper Hewitt, Smithsonian Design Museum, New York</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2020</div>
              <div className={styles.exhibitionDetails}>
                <h3>Most Unique Artistic Voice</h3>
                <p>Fondation Beyeler, Basel</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2019</div>
              <div className={styles.exhibitionDetails}>
                <h3>Distinguished Artist Fellowship</h3>
                <p>Royal Academy of Arts, London</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2019</div>
              <div className={styles.exhibitionDetails}>
                <h3>Breakthrough Artist of the Decade</h3>
                <p>Serpentine Galleries, London</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2018</div>
              <div className={styles.exhibitionDetails}>
                <h3>Critical Acclaim Award</h3>
                <p>Frieze London</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2018</div>
              <div className={styles.exhibitionDetails}>
                <h3>Emerging Talent Recognition</h3>
                <p>The Armory Show, New York</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2017</div>
              <div className={styles.exhibitionDetails}>
                <h3>Curator's Distinguished Selection</h3>
                <p>Punta della Dogana, Venice</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2017</div>
              <div className={styles.exhibitionDetails}>
                <h3>Timeless Vision Award</h3>
                <p>Musée du Louvre, Paris</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2016</div>
              <div className={styles.exhibitionDetails}>
                <h3>21st Century Pioneer</h3>
                <p>MAXXI - Museo nazionale delle arti del XXI secolo, Rome</p>
              </div>
            </div>
            <div className={styles.exhibitionItem}>
              <div className={styles.exhibitionYear}>2016</div>
              <div className={styles.exhibitionDetails}>
                <h3>Modern Masterwork Recognition</h3>
                <p>GAM - Galleria d'Arte Moderna, Turin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.aboutText}>
            <p>
              Through my work, I explore the intersection of color, emotion, and form, 
              creating pieces that invite viewers to pause and reflect.
            </p>
            <p>
              Each painting is a story, a moment captured in time, where technique meets 
              passion. My work draws inspiration from nature, human connection, and the 
              subtle beauty found in everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactInfo}>
            <p><a href="mailto:simona@zampa.ch">simona@zampa.ch</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Adelez</p>
      </footer>

      {/* Artwork Detail Modal */}
      {selectedWork !== null && (
        <div className={styles.modal} onClick={() => setSelectedWork(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedWork(null)}>×</button>
            <div className={styles.modalImage}>
              <div className={styles.imagePlaceholder}>
                [Selected artwork detail]
              </div>
            </div>
            <div className={styles.modalInfo}>
              <h2>{artworks[selectedWork].title}</h2>
              <p>{artworks[selectedWork].medium}</p>
              <p>{artworks[selectedWork].dimensions}</p>
              <p>{artworks[selectedWork].year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}