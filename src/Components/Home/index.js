import styled from 'styled-components';
import Div100vh from 'react-div-100vh'
import Project from '../Project';

const HomeStyles = styled.div`
    width: 100vw;
    height: 100%;
    border: 15px solid var(--primary);
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const Soon = () => {
    return(
        <Div100vh>
        <HomeStyles>
            
            <Project />

        </HomeStyles>
        </Div100vh>
    );
}


export default Soon;