'use client'

import { useState } from 'react'
import styles from '../page.module.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.artistName}><a href='/'>Adelez</a></h1>
        
        {/* Hamburger button */}
        <button 
          className={styles.hamburger}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav with conditional class */}
        <nav className={`${styles.nav} ${navOpen ? styles.navOpen : ''}`}>
          <a href="/artworks" onClick={() => setNavOpen(false)}>Artworks</a>
          <a href="/exhibitions" onClick={() => setNavOpen(false)}>Exhibitions</a>
        </nav>
      </div>
    </header>
  )
}