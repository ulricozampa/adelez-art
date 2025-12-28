import styles from './page.module.css'

export default function About() {
    return <section className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
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
          
          <a 
            href="https://www.artistcloseup.com/blog/interview-simona-zampa" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.discoverLink}
          >
            Discover more →
          </a>
        </div>

        
      </div>
    </section>
}
