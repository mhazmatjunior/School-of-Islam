'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path ? styles.active : '';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>soi</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={`${styles.navLink} ${isActive('/')}`}>Home</Link>
            </li>
            <li>
              <Link href="/courses" className={`${styles.navLink} ${isActive('/courses')}`}>Courses</Link>
            </li>
            <li>
              <Link href="/about" className={`${styles.navLink} ${isActive('/about')}`}>About Us</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.dashboardBtn}>
            Dashboard
          </Link>
          <div className={styles.userIconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.userIcon}>
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
