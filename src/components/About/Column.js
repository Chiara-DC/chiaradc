import styles from "../../styles/About.module.css";
import Timeline from "./Timeline";
import Skillz from "./Skillz";

export default function Column() {
  return (
    <div className={styles.column}>
      <Timeline />
      <Skillz />
    </div>
  );
}
