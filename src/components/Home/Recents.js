import styles from "../../styles/Home.module.css";
import data from "../../data/data.json";

export default function Recents(props) {
  console.log(props);
  return (
    <>
      <div className={styles.recents}>
        Recent Blog Posts!
        <>
          {data.blogs.blog.map((value, index) => (
            <div className={styles.recentblog} key={index}>
              {value.title} <br /> {value.date}
            </div>
          ))}
          {props && (
            <div className={styles.recentblog}>
              <a href="/blog">{props.additional}</a>
            </div>
          )}
        </>
      </div>
    </>
  );
}
