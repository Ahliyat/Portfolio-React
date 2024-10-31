import styles from "./skills.module.css";
import { skillItems } from "../../data";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillContainer}>
      <h2 className={styles.skillTitle}>My Skills</h2>
      <section className={styles.skills}>
        {skillItems.map((skills) => (
          <ul key={skills.id} className={styles.skillContent}>
            <li className={styles.skill}>
              <skills.icon />
              <span className={styles.link}>{skills.title}</span>
            </li>
          </ul>
        ))}
      </section>
    </section>
  );
};
export default Skills;
