import styles from "../styles/Home.module.css";
import Recents from "../components/Home/Recents";
import Hello from "../components/Home/Hello";
import data from "../data/data.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Home/Contact";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.boxes}>
        <Hello
          name={data.about.fullname}
          tagline={data.about.shorttext}
          intro={data.about.introtext}
        />
      </div>
      <Recents additional="Read more here!" id="recents" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}
