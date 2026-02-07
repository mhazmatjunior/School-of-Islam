"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Courses() {
    const [view, setView] = useState('grid');

    const courses = [
        {
            id: 1,
            title: "Begin Your Arabic Journey",
            simpleTitle: "Arabic Learning",
            author: "By Ghaus Nabi",
            duration: "15 Months",
            type: "Course",
            image: "/courses/Arabic Course SOI.png",
            price: "Rs 1,500.00",
            rating: 5,
            reviews: 120
        },
        {
            id: 2,
            title: "Women Leadership",
            simpleTitle: "Woman Leadership",
            author: "By Ghaus Nabi",
            duration: "15 Months",
            type: "Course",
            image: "/courses/Woman Leadership Course SOI.png",
            price: "Rs 1,500.00",
            rating: 5,
            reviews: 85
        },
        {
            id: 3,
            title: "Mentorship",
            simpleTitle: "Mentorship",
            author: "By Ghaus Nabi",
            duration: "15 Months",
            type: "Course",
            image: "/courses/Mentorship Course SOI.png",
            price: "Rs 1,500.00",
            rating: 5,
            reviews: 95
        }
    ];

    return (
        <main className={styles.main}>
            <div className={styles.header}>

                <h1 className={styles.title}>All Courses</h1>
                <p className={styles.subtitle}>
                    We have the largest collection of <span className={styles.highlight}>{courses.length} courses</span>
                </p>
            </div>

            <div className={styles.toolbar}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.viewToggles}>
                        <button
                            className={`${styles.viewBtn} ${view === 'grid' ? styles.active : ''}`}
                            onClick={() => setView('grid')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 12.5 9h3A1.5 1.5 0 0 1 15 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 12.5v-3zm-8 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 1 12.5v-3z" />
                            </svg>
                            Grid
                        </button>
                        <button
                            className={`${styles.viewBtn} ${view === 'list' ? styles.active : ''}`}
                            onClick={() => setView('list')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            List
                        </button>
                    </div>
                    <span className={styles.resultsCount}>Showing 1-{courses.length} of {courses.length} results</span>
                </div>

                <div className={styles.controls}>
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder="Search for Courses..."
                            className={styles.searchInput}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.searchIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <select className={styles.sortSelect}>
                        <option>Filter Sort</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className={view === 'grid' ? styles.grid : styles.listGrid}>
                {courses.map((course) => (
                    <div key={course.id} className={styles.card}>
                        <div className={styles.cardImageWrapper}>
                            <img src={course.image} alt={course.simpleTitle} className={styles.cardImage} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{course.simpleTitle}</h3>
                            <p className={styles.cardAuthor}>{course.author}</p>

                            <div className={styles.cardMeta}>
                                <div className={styles.ratingWrapper}>
                                    <span className={styles.ratingScore}>{course.rating}</span>
                                    <div className={styles.stars}>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#FFC107" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <span className={styles.price}>{course.price}</span>
                            </div>

                            <button className={styles.previewBtn}>
                                Preview
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
