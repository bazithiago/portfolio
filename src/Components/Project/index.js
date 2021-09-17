import styled from 'styled-components';
import TechGroup from '../TechGroup';
import Button from '../Button'
import Image from 'next/image'

const ProjectStyles = styled.div`
    display: flex;
    flex-direction: column;
       
    h3 {
        font-weight: 400;
        margin: 5px 0 20px 0;
    }
    
    & > div > :nth-child(5)  {
        display: flex;
        margin-top: 15px;
                
        & > a + a {
            margin-left: 20px;
        }
    }
    
`

const Project = ({ project }) => {
    return(
        <ProjectStyles>
            <div key={project.title}>
                <Image 
                    alt={project.title}
                    src={project.image}
                    width={350}
                    height={150}
                    layout='fixed'
                />
                <h1>{project.title}</h1>
                <h3>{project.description}</h3>

                <TechGroup data={project.technologies} />

                <div>
                    {project.links.map( socialMedia => {
                        return(
                            <Button 
                                key={socialMedia.name}
                                alt={socialMedia.name}
                                name={socialMedia.name}
                                src={socialMedia.src} 
                                href={socialMedia.href} 
                                target={socialMedia.target} 
                            />
                        ) 
                    })}
                </div>
            </div>
             
            
                 
        </ProjectStyles>
    )
}

export default Project

