import styles from "../styles/About.module.css";
import Intro from "../components/About/Intro.js";
import Column from "../components/About/Column.js";
import data from "../data/data.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className={styles.about}>
      <Navbar />
      <Intro
        name={data.about.fullname}
        shorttext={data.about.jobtitle}
        longtext={data.about.longtext}
      />
      <Column />
      <Footer />
    </div>
  );
}
