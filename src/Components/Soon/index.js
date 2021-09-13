import styled from 'styled-components';
import Div100vh from 'react-div-100vh'
import Button from '../Button'
import Github from '../../images/Github.svg'
import Linkedin from '../../images/Linkedin.svg'

const SoonStyles = styled.div`
    width: 100vw;
    height: 100%;
    border: 15px solid var(--primary);
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        color: var(--primary);
    }

    h1 {
        font-size: 2.8rem;
        font-weight: 700;
        line-height: 98%;
    }

    h2 {
        font-size: 2.25rem;
        font-weight: 400;
        line-height: 98%;
    }

    div {
        margin: 55px 0 30px 0;

        & > a + a {
            margin-top: 10px;
            }
        
        @media screen and (min-width: 512px) {
            display: flex;
            margin: 55px 0 30px 0;

            & > a + a {
                margin-top: 0px;
                margin-left: 20px;
            }
        }

    }

    & > a {
        font-size: 1.45rem;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        overflow-wrap: break-word;
        width: fit-content;

        :hover {
            background-color: var(--primary);
            color: var(--secondary);
            transition: all 0.3s ease-in-out;
            width: fit-content;
        }
    }
`

const Soon = () => {
    return(
        <Div100vh>
        <SoonStyles>
            <span>{`Hi, I'm Thiago`}</span>
            <h1>{`While I'm coding a new portfolio`}</h1>
            <h2>take a look at my social networks</h2>

            <div>
                <Button socialMedia='Github' src={Github} href='https://github.com/bazithiago' target='_blank' /> 
                <Button socialMedia='Linkedin' src={Linkedin} href='https://www.linkedin.com/in/vieirathiago/' target='_blank' /> 
            </div>

            <span>or write me</span>
            <a href="mailto:thiagovieira.dev@gmail.com" rel="noreferrer" target="_blank">thiagovieira.dev@gmail.com</a>

        </SoonStyles>
        </Div100vh>
    );
}


export default Soon;