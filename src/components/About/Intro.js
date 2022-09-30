import styles from "../../styles/About.module.css";

export default function Intro(props) {
  return (
    <>
      <div className={styles.introbox}>
        <img
          src="/images/cactus.jpg"
          alt={props.name}
          className={styles.image}
        />
        <div className={styles.title}>
          {props.name}
          <br />
          <div className={styles.text}>{props.shorttext}</div>
        </div>
        <div className={styles.paragraph}>{props.longtext}</div>
      </div>
    </>
  );
}
