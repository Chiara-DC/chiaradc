import styles from "../styles/components/Navbar.module.css";
import data from "../data/data.json";
export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navtitle}>
          <a href="/">{data.about.fullname}</a>
        </div>
        <div className={styles.navlinks}>
          <a href="/about">
            <div className={styles.navlink}>About </div>
          </a>
          <a href="/blog">
            <div className={styles.navlink}>Blog </div>
          </a>
          <a href="/#contact">
            <div className={styles.navlink}>Contact </div>
          </a>
        </div>
      </nav>
    </>
  );
}
