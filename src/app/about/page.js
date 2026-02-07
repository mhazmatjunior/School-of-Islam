import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>


                <div className={styles.contentWrapper}>
                    <h1 className={styles.title}>About Us</h1>

                    <h2 className={styles.subtitle}>
                        WELCOME TO SCHOOL OF ISLAM, YOUR PREMIER DESTINATION FOR ONLINE LEARNING AND PROFESSIONAL DEVELOPMENT.
                    </h2>

                    <div className={styles.textBlock}>
                        <p>
                            At School of Islam, we believe that education should be accessible, engaging, and transformative.
                            Our platform offers a comprehensive range of courses designed to help you achieve your personal
                            and professional goals.
                        </p>
                        <p>
                            Whether you're looking to advance your career, learn new skills, or explore new interests,
                            we have the resources and expertise to support your learning journey.
                        </p>
                    </div>

                    <div className={styles.decoration}>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                    </div>
                </div>
            </div>
        </main>
    );
}
