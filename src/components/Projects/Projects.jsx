import styles from "./projects.module.css";
import Button from "../Button/Button";
const projectData = [
  {
    id: 1,
    img: "/DMS-picture.PNG",
    title: "DMS",
    description:
      " DMS helps you to manage your rides and deliveries effectively whether as a logistics company or as a regular local business.",
  },
  {
    id: 2,
    img: "/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
  {
    id: 3,
    img: "/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
  {
    id: 4,
    img: "/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
  {
    id: 5,
    img: "/portfolio img.jpg",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptates inventore dolore animi vero cumque! ",
  },
];

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
