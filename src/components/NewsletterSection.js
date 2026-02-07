import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Get Started With <span className={styles.highlight}>
                        <span className="bounce" style={{ animationDelay: '0s' }}>S</span>
                        <span className="bounce" style={{ animationDelay: '0.1s' }}>O</span>
                        <span className="bounce" style={{ animationDelay: '0.2s' }}>I</span>
                        <span className={styles.smileCurve}></span>
                    </span> Now
                </h2>

                <div className={styles.inputWrapper}>
                    <div className={styles.iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className={styles.input}
                    />
                    <button className={styles.button}>
                        Subscribe!
                    </button>
                </div>

                <div className={styles.benefits}>
                    <div className={styles.benefit}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.checkIcon}>
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                        <span>Easy to Access</span>
                    </div>
                    <div className={styles.benefit}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.checkIcon}>
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                        <span>No Credit card</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
