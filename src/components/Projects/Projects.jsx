import projects from '../../data/projects.json';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Porjects</h1>
            <div className={styles.projectsContainer}>
                {projects.map((project) => {
                    return <ProjectCard title={project.title} description={project.description} link={project.link} imageSrc={project.imageSrc} />;
                })}
            </div>
        </section>
    );
};
