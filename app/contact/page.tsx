import styles from './page.module.css'

export default function Contact() {
  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        
        <div className={styles.contactInfo}>
          <p>simona@zampa.ch</p>
        </div>
      </div>
    </section>
  )
}