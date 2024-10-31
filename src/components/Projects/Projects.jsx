import styles from "./projects.module.css";
import Button from "../Button/Button";
import { projectData } from "../../data";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectContainer}>
      <h2>My Projects</h2>
      <section className={styles.projects}>
        <section className={styles.project} id="project">
          {projectData.map((project) => (
            <section key={project.id} className={styles.projectContent}>
              <img src={project.img} alt="" />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <Button type="button" className={styles.projectBtn}>
                View Project
              </Button>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};
export default Projects;
