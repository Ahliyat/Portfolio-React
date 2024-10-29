import styles from "./about.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const About = () => {
  return (
    <section id="homepage" className={styles.heroContainer}>
      <section className={styles.leftContainer}>
        <h2 className={styles.heroTitle}>Hi, I&apos;m Ahliyat Orenuga</h2>
        <div className={styles.intro}>
          <h5>I&apos;m a Software Developer</h5>
          <br />
          <p>I am a Frontend software developer based in lagos, Nigeria.</p>
          <p>
            I have a very good and detailed understanding of HTML, CSS and
            JavaScript. I have an entusiasm or harnessing technology and using
            it to create responsive,accessible and user-friendly web designs.
          </p>
          <br />
          <p>
            I have great technical skill and teamspirit which makes me a good
            collaborator that is able to work closely and efficiently with a
            team.
          </p>
          <p>
            I have a zeal to learn new technologies and maximize their use to
            solve real-life problems.
          </p>
        </div>
        <Button className={styles.heroBtn}>
          <Link href="mailto:ahliyahorenuga@gmail.com">Contact Me</Link>
        </Button>
      </section>
      <section className={styles.rightContainer}>
        <img src="/myportfolio-img.jfif" alt="Ahliyat" />
      </section>
    </section>
  );
};
export default About;
