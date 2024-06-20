import Links from './links/Links';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Links />
    </nav>
  );
}
