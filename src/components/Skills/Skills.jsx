import styles from "./skills.module.css";
import { FaSquareGit, FaHtml5, FaCss3Alt, FaSquareJs } from "react-icons/fa6";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillContainer}>
      <h2 className={styles.skillTitle}>My Skills</h2>
      <ul className={styles.skills}>
        <li className={styles.skill}>
          <FaHtml5 />
          <span className={styles.link}>Html</span>
        </li>
        <li className={styles.skill}>
          <FaCss3Alt />
          <span className={styles.link}>Css</span>
        </li>
        <li className={styles.skill}>
          <FaSquareJs />
          <span className={styles.link}>Javascript</span>
        </li>
        <li className={styles.skill}>
          <FaSquareGit />

          <span className={styles.link}>Git</span>
        </li>
      </ul>
    </section>
  );
};
export default Skills;
