import Link from 'next/link';
import styles from '@/styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About Us</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
          <li>
            <Link href="/Products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
