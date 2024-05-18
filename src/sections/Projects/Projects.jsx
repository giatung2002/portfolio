import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/download.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          h3="Local Run Chat GPT"
          p="Local Run Chat GPT using mistral-7b-openorca.Q4_0-Still In Progress"
        />
      </div>
    </section>
  );
}

export default Projects;
