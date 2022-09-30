import styles from "../../styles/Home.module.css";

export default function Hello(props) {
  return (
    <div className={styles.hellobox}>
      <img src="/images/cactus.jpg" alt={props.name} className={styles.image} />
      <div className={styles.title}>
        {props.name}
        <br />
        <div className={styles.text}>{props.tagline}</div>
      </div>
      <div className={styles.intro}>{props.intro}</div>
    </div>
  );
}
