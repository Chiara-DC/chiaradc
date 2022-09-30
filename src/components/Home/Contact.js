import styles from "../../styles/Home.module.css";
import data from "../../data/data.json";
// import phone from "../../../public/images/icons/Phone.svg";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <p id="contact">Contact </p>
      <div className={styles.contacttype}>
        <img
          src="/images/icons/Linkedin.svg"
          height={28}
          title={data.contact.linkedin}
          alt={data.contact.linkedin}
        />
        LinkedIn: {data.contact.linkedin}
      </div>
      <br />
      <div className={styles.contacttype}>
        <img
          src="/images/icons/Email.svg"
          height={28}
          title={data.contact.email}
          alt={data.contact.email}
        />
        Email: {data.contact.email}
      </div>
      <br />
      {/* <div className={styles.contacttype}>
        <img
          src={phone}
          height={20}
          title={data.contact.phone}
          alt={data.contact.phone}
        />
        Phone Number: {data.contact.phone}
      </div>
      <br /> */}
    </div>
  );
}
