import styled from 'styled-components';
import Div100vh from 'react-div-100vh'
import Project from '../Project';
import ProjectsDatabase from '../../Database/projects';

const HomeStyles = styled.div`
    width: 100vw;
    height: 100%;
    border: 15px solid var(--primary);
    padding: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }

`

const Soon = () => {
    return(
        <Div100vh>
        <HomeStyles>
            {ProjectsDatabase.map( project => {
                return(
                    <Project 
                        key={project.title}    
                        project={project}/>
                )
            })}
        </HomeStyles>
        </Div100vh>
    );
}


export default Soon;