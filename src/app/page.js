import Link from 'next/link';
import styles from './page.module.css';
import InfoSection from '../components/InfoSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.subtitle}>Keep Learning</span>
          <h1 className={styles.title}>
            School <span className="bounce" style={{ color: 'var(--accent-yellow)' }}>O</span>f <span className={styles.islamContainer}>Islam<span className={styles.smileCurve}></span></span>
          </h1>
          <p className={styles.projectBy}>A Project by <span className={styles.yellowUnderline}>YouthLink</span></p>

          <Link href="/courses" className={styles.ctaButton}>
            Find Courses <span className={styles.arrow}>→</span>
          </Link>
        </div>
        <div className={styles.imagePlaceholder}>
          {/* Transparent Image Holder */}
          <div className={styles.imageHolder}>
            <div className={styles.placeholderText}>Image Placeholder</div>
          </div>
        </div>
        <div className={styles.backgroundCurve}></div>
      </section>
      <InfoSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
