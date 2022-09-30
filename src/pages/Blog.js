import { React, useState } from "react";
import styles from "../styles/Blog.module.css";
import BlogIcon from "../components/Blog/BlogIcon";
import data from "../data/data.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  const [selected, setSelected] = useState(true);
  return (
    <>
      <Navbar />
      <div className={styles.blogfilter}>
        Tags =
        {data.blogs.tags.map((tag) => (
          <button
            key={tag}
            onClick={(e) => {
              setSelected(true);
              console.log(tag);
            }}
          >
            {tag}
          </button>
        ))}
        <button key="blog">blog</button>
      </div>
      <div className={styles.gridcontainer}>
        {data.blogs.blog
          .sort((a, b) => a.title - b.title)
          .map((blog, index) => (
            <BlogIcon blog={blog} key={index} />
          ))}
      </div>
      <Footer />
    </>
  );
}
