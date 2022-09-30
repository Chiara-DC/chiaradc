import styles from "../styles/components/Footer.module.css";
import data from "../data/data.json";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="/contact">{data.site.copyright}</a>
      </footer>
    </>
  );
}
