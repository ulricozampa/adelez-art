'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { categories } from './artworks'

export default function HomePage() {
  const [carouselImages, setCarouselImages] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get all images with carousel: true
  useEffect(() => {
    const allCarouselImages = categories
      .flatMap(cat => cat.images)
      .filter(img => img.carousel)
    setCarouselImages(allCarouselImages)
  }, [])

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        carouselImages.length ? (prev + 1) % carouselImages.length : 0
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [carouselImages])

  if (!carouselImages.length) return null
  const currentImage = carouselImages[currentIndex]

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % carouselImages.length)
  }

  return (
    <>
      {/* Hero Slider */}
      <section className={styles.sliderWrapper}>
          <div className={styles.sliderImageWrapper}>
            <Image
              src={currentImage.image}
              alt={currentImage.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            
          </div>

        {/* Arrows */}
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
          &#10095;
        </button>

        {/* Dots */}
        <div className={styles.sliderNav}>
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${
                idx === currentIndex ? styles.activeDot : ''
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Adelez</p>
      </footer>
    </>
  )
}
