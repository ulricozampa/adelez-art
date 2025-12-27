'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { categories } from '../artworks'

export default function Artworks() {
  return (
    <section id="artworks" className={styles.artworksWrapper}>
      {categories.map((cat) => (
        <div key={cat.category} className={styles.categoryBlock}>
          <h2 className={styles.categoryTitle}>{cat.category}</h2>

          <div className={styles.artworksGrid}>
            {cat.images.map((art) => (
              <Link
                key={art.slug}
                href={`/artworks/${art.slug}`}
                className={styles.artworkItem}
              >
                <div className={styles.artworkImageWrapper}>
                   <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.artworkImage}
                    />
                </div>

                <div className={styles.artworkDetails}>
                  <h3>{art.title}</h3>
                  <p>{art.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}


