import Link from "next/link";
import styles from "./../styles/Navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/stories">
          <a>Stories</a>
        </Link>
        <Link href="/auth">
          <a>Auth</a>
        </Link>
      </div>
    </nav>
  );
};
