"use client";

import { useState } from 'react';
import styles from './InfoSection.module.css';

export default function InfoSection() {
    const [activeTab, setActiveTab] = useState('what');

    const content = {
        what: "SOI is more than another institute. It’s basically a bridge between knowledge and real life, a grounding point for anyone trying to understand where we actually stand and what needs to be done. It’s just a space where we try to fix the confusion today’s youth is stuck in, all rooted in the Qur’an and Sunnah.",
        why: "Dummy content for Why SOI? This section will explain the unique value proposition and why students should choose School of Islam.",
        working: "Dummy content for Working Model. This section will outline how the courses are structured and delivered to students."
    };

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                {/* Tabs */}
                <div className={styles.tabsContainer}>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'what' ? styles.active : ''}`}
                            onClick={() => setActiveTab('what')}
                        >
                            What is School of Islam?
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'why' ? styles.active : ''}`}
                            onClick={() => setActiveTab('why')}
                        >
                            Why SOI?
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'working' ? styles.active : ''}`}
                            onClick={() => setActiveTab('working')}
                        >
                            Working Model
                        </button>
                    </div>
                    <div className={styles.tabLine}></div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <p className={styles.text}>{content[activeTab]}</p>
                </div>

                {/* Partners Section */}
                <div className={styles.partnersSection}>
                    <div className={styles.partnersText}>
                        <h2 className={styles.partnersTitle}>
                            Who will <br />
                            You Learn <span className={styles.highlight}><span className="bounce">With?</span></span>
                        </h2>
                        <p className={styles.partnersDesc}>
                            You can list your partners or instructors brands here to show off your sites
                        </p>
                        <button className={styles.partnersBtn} disabled>
                            View All Partners
                        </button>
                    </div>

                    <div className={styles.logos}>
                        <div className={styles.logoPlaceholder}>
                            <span>Logo 1</span>
                        </div>
                        <div className={styles.logoPlaceholder}>
                            <span>Logo 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
