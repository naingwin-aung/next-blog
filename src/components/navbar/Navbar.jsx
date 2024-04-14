import Link from "next/link";
import Links from "./links/Links";
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links/>
      </div>
    </nav>
  );
}
