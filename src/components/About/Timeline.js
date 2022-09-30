import styles from "../../styles/About.module.css";
import data from "../../data/data.json";
import { React, useState } from "react";

export default function Timeline() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="timeline">
      <div className={styles.timelinetitle}>Timeline</div>
      {data.timeline.map((role, index) => (
        <div className={styles.timelinebox} key={index}>
          <div className={styles.timelineimage}>
            <img
              src={`/images/logos/${role.logo}.svg`}
              width={32}
              height={32}
              alt={role.location}
              key={role.description}
            />
          </div>
          <div className={styles.timelinetext}>
            <b>{role.name}</b> <br />
            {role.description}
            <br />
            {role.description}
            <br />
            {readMore ? (
              <>
                <button
                  onClick={() => {
                    setReadMore(false);
                  }}
                >
                  Read more here!
                </button>
              </>
            ) : (
              <>
                {role.details}
                <br />
                <button
                  onClick={() => {
                    setReadMore(true);
                  }}
                >
                  Read more!
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
