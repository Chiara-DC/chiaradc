import styles from "../../styles/About.module.css";
import data from "../../data/data.json";

export default function Skillz() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelinetitle}>Skills</div>
      <div className={styles.skilltext}>
        {data.skills.map((skill, index) => (
          <ul>
            <li>{skill}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
