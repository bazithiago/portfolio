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

const Home = () => {
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
            {/* <ParallaxComponent
                speed="0.003"
                width="300"
                top="40%"
                left="100"
                >
                <div>
                    Children component
                </div>
            </ParallaxComponent> */}
        </HomeStyles>
        </Div100vh>
    );
}


export default Home;