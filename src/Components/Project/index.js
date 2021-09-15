import styled from 'styled-components';
import ProjectsDatabase from '../../Database/projects';
import TechGroup from '../TechGroup';
import TechIcon from '../TechIcon';

const ProjectStyles = styled.div`
    display: flex;
    flex-direction: column;

`

const Project = () => {
    return(
        <ProjectStyles>
        
            {ProjectsDatabase.map( project => {
                return(
                    <div key={project.title}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>

                        <TechGroup data={project.technologies} />
                       
                    </div>
                );
            } )}

        </ProjectStyles>
    )
}

export default Project

