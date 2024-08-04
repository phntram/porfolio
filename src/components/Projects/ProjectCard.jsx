import { getImageUrl } from '../../Utils/utils';

export const ProjectCard = ({ title, description, link, imageSrc }) => {
    return (
        <a href={link}>
            <img className='hover' src={getImageUrl(imageSrc)} alt={`${title} logo`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
};
