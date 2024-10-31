import styles from "./skills.module.css";
import {
  FaSquareGit,
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
} from "react-icons/fa6";

const skillItems = [
  {
    id: 1,
    title: "Html",
    icon: FaHtml5,
  },
  {
    id: 2,
    title: "Css",
    icon: FaCss3Alt,
  },
  {
    id: 3,
    title: "Javascript",
    icon: FaSquareJs,
  },
  {
    id: 4,
    title: "Git",
    icon: FaSquareGit,
  },
  {
    id: 5,
    title: "React",
    icon: FaReact,
  },
];

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
